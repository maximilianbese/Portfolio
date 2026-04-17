"use strict";

/**
 * Button marquee — animiert den Text beim Hover.
 */
(function () {
  const SPEED = 80; // px/s

  /** @param {HTMLElement} btn */
  function initBtn(btn) {
    const inner = btn.querySelector(".btn-inner");
    const span = inner?.querySelector("span");
    if (!inner || !span) return;

    let clone = null,
      rafId = null,
      offset = 0,
      spanW = 0,
      last = null;

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

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn, .btn-ghost, .btn-small").forEach(initBtn);
  });
})();
