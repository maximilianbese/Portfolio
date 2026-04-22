/**
 * @file marquee.js
 * @description Button marquee animation — scrolls button label text on hover.
 *
 * When the user hovers over any `.btn`, `.btn-ghost`, or `.btn-small` element,
 * the visible text label begins scrolling horizontally at a constant speed.
 * A clone of the label span is appended so the animation loops seamlessly.
 * The animation stops and resets when the cursor leaves the button.
 *
 * Uses `requestAnimationFrame` for smooth, frame-rate-independent animation.
 *
 * Expected HTML structure:
 * ```html
 * <a class="btn-ghost">
 *   <span class="btn-inner"><span>Button label</span></span>
 * </a>
 * ```
 *
 * Dependencies: None (standalone IIFE).
 *
 * @module marquee
 * @author Maximilian Bese <maximilian-bese@gmx.de>
 * @version 1.0.0
 */

"use strict";

(function () {
  /** Scroll speed in pixels per second. */
  const SPEED = 80;

  /**
   * Attaches the marquee hover behaviour to a single button element.
   *
   * On `mouseenter`:
   *  1. Locks the button width so it does not resize during animation.
   *  2. Measures the label span width and appends a clone for seamless looping.
   *  3. Starts the `requestAnimationFrame` loop.
   *
   * On `mouseleave`:
   *  1. Cancels the animation frame.
   *  2. Removes the clone and resets the transform and width.
   *
   * @param {HTMLElement} btn - The button element to initialise.
   * @returns {void}
   */
  function initBtn(btn) {
    const inner = btn.querySelector(".btn-inner");
    const span = inner?.querySelector("span");
    if (!inner || !span) return;

    /** @type {HTMLElement | null} */
    let clone = null;
    /** @type {number | null} */
    let rafId = null;
    /** Current horizontal offset in pixels. */
    let offset = 0;
    /** Width of the original label span in pixels. */
    let spanW = 0;
    /** Timestamp of the previous animation frame (ms). */
    let last = null;

    /**
     * Animation loop step. Advances the offset based on elapsed time
     * and wraps when the offset exceeds the span width.
     *
     * @param {DOMHighResTimeStamp} ts - Current timestamp provided by rAF.
     * @returns {void}
     */
    const step = (ts) => {
      if (!last) last = ts;
      offset += SPEED * ((ts - last) / 1000);
      last = ts;
      if (offset >= spanW) offset -= spanW;
      inner.style.transform = `translateX(${-offset}px)`;
      rafId = requestAnimationFrame(step);
    };

    btn.addEventListener("mouseenter", () => {
      if (clone) return;
      btn.style.width = `${btn.getBoundingClientRect().width}px`;
      spanW = span.getBoundingClientRect().width;
      clone = span.cloneNode(true);
      inner.appendChild(clone);
      offset = 0;
      last = null;
      rafId = requestAnimationFrame(step);
    });

    btn.addEventListener("mouseleave", () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      offset = 0;
      last = null;
      inner.style.transform = "";
      btn.style.width = "";
      if (clone) {
        inner.removeChild(clone);
        clone = null;
      }
    });
  }

  /**
   * Initialises the marquee animation for all button elements once the DOM is ready.
   *
   * @listens DOMContentLoaded
   * @returns {void}
   */
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn, .btn-ghost, .btn-small").forEach(initBtn);
  });
})();
