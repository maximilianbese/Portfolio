"use strict";

/* ═══════════════════════════════════════════════
   BUTTON MARQUEE
   On hover: clones the span, then rAF-loops both
   spans left at a fixed speed. On leave: cancels,
   removes clone, resets transform.
════════════════════════════════════════════════ */
(function () {
  var SPEED = 80; /* px per second */

  function initBtn(btn) {
    var inner = btn.querySelector(".btn-inner");
    var span = inner && inner.querySelector("span");
    if (!inner || !span) return;

    var clone = null;
    var rafId = null;
    var offset = 0;
    var spanW = 0;
    var last = null;

    function tick(ts) {
      if (!last) last = ts;
      offset += SPEED * ((ts - last) / 1000);
      last = ts;
      if (offset >= spanW) offset -= spanW;
      inner.style.transform = "translateX(" + -offset + "px)";
      rafId = requestAnimationFrame(tick);
    }

    function onEnter() {
      if (clone) return;
      btn.style.width = btn.getBoundingClientRect().width + "px";
      spanW = span.getBoundingClientRect().width;
      clone = span.cloneNode(true);
      inner.appendChild(clone);
      offset = 0;
      last = null;
      rafId = requestAnimationFrame(tick);
    }

    function onLeave() {
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
    }

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
  }

  document.querySelectorAll(".btn").forEach(initBtn);
})();
