"use strict";

/* ═══════════════════════════════════════════════
   TESTIMONIALS SLIDER
════════════════════════════════════════════════ */
(function () {
  var CENTER_W = 620;
  var SIDE_W = 320;
  var OVERLAP = 40;

  var track = document.getElementById("testimonialsTrack");
  var cards = Array.from(track.querySelectorAll(".testimonial-card"));
  var dots = Array.from(document.querySelectorAll(".t-dot"));
  var current = 0;

  function getShift() {
    var totalBefore = current * (SIDE_W - OVERLAP);
    return window.innerWidth / 2 - CENTER_W / 2 - totalBefore;
  }

  function applyClasses() {
    cards.forEach(function (card, i) {
      card.classList.toggle("t-center", i === current);
      card.classList.toggle("t-side", i !== current);
    });
  }

  function applyDots() {
    dots.forEach(function (d, i) {
      d.classList.toggle("active", i === current);
    });
  }

  function update() {
    applyClasses();
    applyDots();
    track.style.transform = "translateX(" + getShift() + "px)";
  }

  function goTo(idx) {
    current = (idx + cards.length) % cards.length;
    update();
  }

  document.getElementById("prevBtn").addEventListener("click", function () {
    goTo(current - 1);
  });
  document.getElementById("nextBtn").addEventListener("click", function () {
    goTo(current + 1);
  });
  dots.forEach(function (d) {
    d.addEventListener("click", function () {
      goTo(+d.dataset.i);
    });
  });
  window.addEventListener("resize", update);

  update();
})();
