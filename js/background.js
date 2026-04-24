/**
 * @file background.js
 * @description Ambient canvas particle network rendered behind all page content.
 *
 * Draws a field of slowly drifting dots connected by faint lines whenever
 * two particles come within `LINK_DIST` pixels of each other. Colours are
 * taken from the site's design tokens (dark background + accent green) so the
 * animation blends seamlessly with the existing gradient.
 *
 * The canvas is inserted as the very first child of `<body>` and positioned
 * fixed so it covers the full viewport at all times without affecting layout.
 * It is resized automatically on window resize.
 *
 * Performance notes:
 *  - Particle count scales with viewport area, capped at MAX_PARTICLES.
 *  - Line opacity falls off linearly with distance so only near neighbours
 *    are visible, keeping per-frame draw calls low.
 *  - `will-change: transform` is intentionally omitted; the canvas itself
 *    is the GPU-composited layer.
 *
 * Dependencies: None (standalone IIFE).
 *
 * @module background
 * @author Maximilian Bese <maximilian-bese@gmx.de>
 * @version 1.0.0
 */

"use strict";

(function () {
  /* ── Design tokens (must match style.css :root) ── */

  /** Background fill colour — matches --bg-dark blended with --bg-gradient-green. */
  const BG_COLOR = "rgba(28, 28, 28, 0)"; // transparent: body gradient shows through

  /** Particle and line colour — matches --accent-green. */
  const ACCENT = "61, 207, 182";

  /* ── Tuning constants ── */

  /** Maximum number of particles regardless of viewport size. */
  const MAX_PARTICLES = 90;

  /** Minimum number of particles on very small viewports. */
  const MIN_PARTICLES = 30;

  /** Pixels per unit of viewport area used to derive particle count. */
  const AREA_DIVISOR = 14000;

  /** Maximum distance (px) at which two particles draw a connecting line. */
  const LINK_DIST = 160;

  /** Dot radius in pixels. */
  const DOT_RADIUS = 1.5;

  /** Maximum particle speed in pixels per second (randomly assigned per particle). */
  const MAX_SPEED = 18;

  /** Minimum particle speed in pixels per second. */
  const MIN_SPEED = 4;

  /* ── Canvas setup ── */

  /** @type {HTMLCanvasElement} */
  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");

  Object.assign(canvas.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "0",
    pointerEvents: "none",
  });

  document.body.insertBefore(canvas, document.body.firstChild);

  /** @type {CanvasRenderingContext2D} */
  const ctx = canvas.getContext("2d");

  /* ── State ── */

  /** @type {{ x: number, y: number, vx: number, vy: number, alpha: number }[]} */
  let particles = [];

  /** Canvas logical pixel dimensions. */
  let W = 0;
  let H = 0;

  /* ── Helpers ── */

  /**
   * Returns a random floating-point number between `min` and `max`.
   *
   * @param {number} min
   * @param {number} max
   * @returns {number}
   */
  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  /**
   * Derives how many particles should exist for the current viewport area.
   *
   * @returns {number} Clamped particle count.
   */
  function particleCount() {
    const area = W * H;
    return Math.min(
      MAX_PARTICLES,
      Math.max(MIN_PARTICLES, Math.floor(area / AREA_DIVISOR)),
    );
  }

  /**
   * Creates a single particle with random position, velocity, and opacity.
   *
   * @returns {{ x: number, y: number, vx: number, vy: number, alpha: number }}
   */
  function createParticle() {
    const angle = rand(0, Math.PI * 2);
    const speed = rand(MIN_SPEED, MAX_SPEED);
    return {
      x: rand(0, W),
      y: rand(0, H),
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: rand(0.25, 0.7),
    };
  }

  /**
   * Resizes the canvas to the current window dimensions (device-pixel-ratio aware)
   * and rebuilds the particle pool to match the new area.
   *
   * @returns {void}
   */
  function resize() {
    const dpr = window.devicePixelRatio || 1;
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const target = particleCount();
    /* Trim excess particles. */
    if (particles.length > target) {
      particles.length = target;
    }
    /* Add missing particles. */
    while (particles.length < target) {
      particles.push(createParticle());
    }
  }

  /* ── Animation loop ── */

  /** Timestamp of the previous animation frame (ms). */
  let last = null;

  /**
   * Single animation frame.
   * Clears the canvas, moves each particle, wraps it at viewport edges,
   * draws dots, then draws connecting lines for nearby pairs.
   *
   * @param {DOMHighResTimeStamp} ts - Timestamp from requestAnimationFrame.
   * @returns {void}
   */
  function frame(ts) {
    if (!last) last = ts;
    const dt = Math.min((ts - last) / 1000, 0.05); // cap delta to avoid jumps after tab switch
    last = ts;

    ctx.clearRect(0, 0, W, H);

    /* Move & wrap particles. */
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;

      /* Wrap around viewport edges. */
      if (p.x < -DOT_RADIUS) p.x = W + DOT_RADIUS;
      else if (p.x > W + DOT_RADIUS) p.x = -DOT_RADIUS;
      if (p.y < -DOT_RADIUS) p.y = H + DOT_RADIUS;
      else if (p.y > H + DOT_RADIUS) p.y = -DOT_RADIUS;
    }

    /* Draw connecting lines (O(n²) — acceptable for ≤ 90 particles). */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < LINK_DIST) {
          /* Fade opacity toward zero as distance approaches LINK_DIST. */
          const lineAlpha = (1 - dist / LINK_DIST) * 0.18;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${ACCENT}, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    /* Draw particle dots. */
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ACCENT}, ${p.alpha})`;
      ctx.fill();
    }

    requestAnimationFrame(frame);
  }

  /* ── Init ── */

  resize();

  /** Debounce resize events to avoid thrashing layout. @type {number} */
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  requestAnimationFrame(frame);
})();
