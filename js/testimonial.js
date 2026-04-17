"use strict";

(function () {
  const CARDS_SEL = ".testimonial-card";
  const DOTS_SEL = ".dots .dot";
  const STATE_CLASSES = ["active", "prev", "next"];

  function getElements() {
    return {
      cards: Array.from(document.querySelectorAll(CARDS_SEL)),
      dots: Array.from(document.querySelectorAll(DOTS_SEL)),
      prevBtn: document.querySelector(".arrow.prev"),
      nextBtn: document.querySelector(".arrow.next"),
    };
  }

  /** @param {Element[]} cards @param {number} current */
  function applyCardClasses(cards, current) {
    const total = cards.length;
    cards.forEach((card, i) => {
      card.classList.remove(...STATE_CLASSES);
      if (i === current) card.classList.add("active");
      else if (i === (current - 1 + total) % total) card.classList.add("prev");
      else if (i === (current + 1) % total) card.classList.add("next");
    });
  }

  /** @param {Element[]} dots @param {number} current */
  function syncDots(dots, current) {
    dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
  }

  /** @param {{ cards: Element[], dots: Element[] }} els @param {number} current */
  function render(els, current) {
    applyCardClasses(els.cards, current);
    syncDots(els.dots, current);
  }

  function init() {
    const els = getElements();
    if (!els.cards.length) return;

    let current = Math.floor(els.cards.length / 2);
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

  document.addEventListener("DOMContentLoaded", init);
})();
