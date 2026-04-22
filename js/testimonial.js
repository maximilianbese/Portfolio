/**
 * @file testimonial.js
 * @description Testimonial carousel / slider controller.
 *
 * Implements a three-visible-card carousel for the testimonials section.
 * The active card is centred and fully opaque; the immediately preceding and
 * following cards are shown at reduced scale and opacity on either side.
 * All other cards are invisible.
 *
 * Navigation is supported via:
 *  - Previous / next arrow buttons (`.arrow.prev` / `.arrow.next`).
 *  - Dot indicators (`.dots .dot`) — each dot jumps to a specific card.
 *  - Direct card clicks — clicking a side card makes it the active card.
 *
 * The initial active card is the middle card of the set.
 *
 * Dependencies: None (standalone IIFE). Requires the following CSS selectors
 * in the DOM:
 *  - `.testimonial-card` — individual testimonial cards.
 *  - `.dots .dot`        — pagination dot indicators.
 *  - `.arrow.prev`       — previous arrow button.
 *  - `.arrow.next`       — next arrow button.
 *
 * @module testimonial
 * @author Maximilian Bese <maximilian-bese@gmx.de>
 * @version 1.0.0
 */

"use strict";

(function () {
  /** CSS selector for all testimonial card elements. */
  const CARDS_SEL = ".testimonial-card";

  /** CSS selector for pagination dot elements. */
  const DOTS_SEL = ".dots .dot";

  /** State class names applied to cards. Only one applies at a time per card. */
  const STATE_CLASSES = ["active", "prev", "next"];

  /**
   * Queries and returns all interactive slider elements from the DOM.
   *
   * @returns {{
   *   cards:   Element[],
   *   dots:    Element[],
   *   prevBtn: Element | null,
   *   nextBtn: Element | null
   * }}
   */
  function getElements() {
    return {
      cards: Array.from(document.querySelectorAll(CARDS_SEL)),
      dots: Array.from(document.querySelectorAll(DOTS_SEL)),
      prevBtn: document.querySelector(".arrow.prev"),
      nextBtn: document.querySelector(".arrow.next"),
    };
  }

  /**
   * Assigns `active`, `prev`, and `next` CSS classes to the card array
   * based on the current active index. All other cards receive no state class
   * and are therefore invisible.
   *
   * @param {Element[]} cards   - Array of all testimonial card elements.
   * @param {number}    current - Index of the currently active card.
   * @returns {void}
   */
  function applyCardClasses(cards, current) {
    const total = cards.length;
    cards.forEach((card, i) => {
      card.classList.remove(...STATE_CLASSES);
      if (i === current) {
        card.classList.add("active");
      } else if (i === (current - 1 + total) % total) {
        card.classList.add("prev");
      } else if (i === (current + 1) % total) {
        card.classList.add("next");
      }
    });
  }

  /**
   * Syncs the active state of the pagination dots with the current card index.
   *
   * @param {Element[]} dots    - Array of dot indicator elements.
   * @param {number}    current - Index of the currently active card.
   * @returns {void}
   */
  function syncDots(dots, current) {
    dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
  }

  /**
   * Renders the slider state — updates card classes and dot indicators.
   *
   * @param {{ cards: Element[], dots: Element[] }} els - Slider element references.
   * @param {number} current - Index of the currently active card.
   * @returns {void}
   */
  function render(els, current) {
    applyCardClasses(els.cards, current);
    syncDots(els.dots, current);
  }

  /**
   * Initialises the testimonial slider.
   * Sets the initial active card to the middle of the set and wires up all
   * navigation event listeners.
   *
   * Exits silently if no card elements are found in the DOM.
   *
   * @returns {void}
   */
  function init() {
    const els = getElements();
    if (!els.cards.length) return;

    let current = Math.floor(els.cards.length / 2);

    /**
     * Moves the slider by the given delta (±1) with wrap-around.
     *
     * @param {number} delta - Direction: `-1` for previous, `+1` for next.
     * @returns {void}
     */
    const go = (delta) => {
      current = (current + delta + els.cards.length) % els.cards.length;
      render(els, current);
    };

    els.prevBtn?.addEventListener("click", () => go(-1));
    els.nextBtn?.addEventListener("click", () => go(+1));

    els.dots.forEach((dot, i) =>
      dot.addEventListener("click", () => {
        current = i;
        render(els, current);
      }),
    );

    els.cards.forEach((card, i) =>
      card.addEventListener("click", () => {
        current = i;
        render(els, current);
      }),
    );

    render(els, current);
  }

  /** @listens DOMContentLoaded */
  document.addEventListener("DOMContentLoaded", init);
})();
