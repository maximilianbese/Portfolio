/**
 * @file ticker.js
 * @description Seamlessly looping hero banner driven by requestAnimationFrame.
 *
 * Replaces the CSS `animation: marquee` approach with a JS loop so the ticker
 * runs without interruption regardless of tab switches, resize events, or
 * browser animation-delay quirks.
 *
 * How it works:
 *  1. The CSS animation is stripped from `.ticker-content`.
 *  2. Enough clones of the content block are created so the combined width
 *     is at least twice the visible ticker width — guaranteeing the seam is
 *     never visible.
 *  3. Each rAF frame advances an `offset` counter and positions every block
 *     (original + clones) with `translateX`, wrapping seamlessly when the
 *     offset reaches the width of one content block.
 *  4. On window resize the clones are rebuilt and the loop restarts.
 *
 * Expected HTML structure:
 * ```html
 * <div class="hero-ticker">
 *   <div class="ticker-content">
 *     <span>…</span><span class="ticker-dot">•</span>…
 *   </div>
 * </div>
 * ```
 *
 * Dependencies: None (standalone IIFE).
 *
 * @module ticker
 * @author Maximilian Bese <maximilian-bese@gmx.de>
 * @version 2.0.0
 */

"use strict";

(function () {
  /** Scroll speed in pixels per second. */
  const SPEED = 60;

  /**
   * Initialises the seamless ticker loop for a single `.hero-ticker` element.
   *
   * @param {HTMLElement} ticker - The wrapper element containing `.ticker-content`.
   * @returns {void}
   */
  function initTicker(ticker) {
    const content = ticker.querySelector(".ticker-content");
    if (!content) return;

    /* Hand off from CSS animation to JS. */
    content.style.animation = "none";
    content.style.transform = "translateX(0)";

    /**
     * Removes any existing clones and creates fresh ones.
     * Ensures the total content width fills the ticker at least twice over,
     * so the loop wrap point is never visible.
     *
     * @returns {void}
     */
    function ensureClones() {
      ticker.querySelectorAll(".ticker-clone").forEach((el) => el.remove());

      const originalWidth = content.scrollWidth;
      const tickerWidth = ticker.offsetWidth;
      const copies = Math.ceil((tickerWidth * 2) / originalWidth) + 1;

      for (let i = 0; i < copies; i++) {
        const clone = content.cloneNode(true);
        clone.classList.add("ticker-clone");
        clone.style.animation = "none";
        ticker.appendChild(clone);
      }
    }

    ensureClones();

    /** Current horizontal offset in pixels. */
    let offset = 0;
    /** Timestamp of the previous animation frame (ms). */
    let last = null;
    /** Active requestAnimationFrame handle. */
    let rafId = null;

    /**
     * Single animation frame step.
     * Advances the offset by the elapsed time, wraps at content width,
     * and repositions all blocks via `translateX`.
     *
     * @param {DOMHighResTimeStamp} ts - Timestamp provided by rAF.
     * @returns {void}
     */
    function step(ts) {
      if (!last) last = ts;
      const delta = (ts - last) / 1000;
      last = ts;

      offset += SPEED * delta;

      const w = content.scrollWidth;
      if (offset >= w) offset -= w;

      const allItems = ticker.querySelectorAll(
        ".ticker-content, .ticker-clone",
      );
      allItems.forEach((el, i) => {
        el.style.transform = `translateX(${i * w - offset}px)`;
      });

      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);

    /**
     * Debounced resize handler — rebuilds clones and restarts the loop
     * when the viewport width changes.
     *
     * @type {number}
     */
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        cancelAnimationFrame(rafId);
        offset = 0;
        last = null;
        ensureClones();
        rafId = requestAnimationFrame(step);
      }, 200);
    });
  }

  /**
   * Initialises every `.hero-ticker` element found in the document.
   *
   * @listens DOMContentLoaded
   * @returns {void}
   */
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".hero-ticker").forEach(initTicker);
  });
})();
