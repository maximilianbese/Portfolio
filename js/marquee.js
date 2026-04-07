"use strict";

/* ═══════════════════════════════════════════════
   BUTTON MARQUEE LOGIC
   Verhindert das "Verschwinden" des Textes nach dem Hover
════════════════════════════════════════════════ */
(function () {
  document.querySelectorAll(".btn").forEach(function (btn) {
    const span = btn.querySelector(".btn-inner span");
    if (!span) return;

    // Hover Start: Text kommt von rechts rein
    btn.addEventListener("mouseenter", function () {
      span.classList.remove("btn-marquee-out");
      void span.offsetWidth; // Force Reflow
      span.classList.add("btn-marquee-in");
    });

    // Hover Ende: Text geht nach links raus
    btn.addEventListener("mouseleave", function () {
      span.classList.remove("btn-marquee-in");
      void span.offsetWidth; // Force Reflow
      span.classList.add("btn-marquee-out");
    });

    // WICHTIG: Wenn die "Raus"-Animation fertig ist,
    // setzen wir den Text sofort wieder auf die Standardposition (Mitte)
    span.addEventListener("animationend", function (e) {
      if (e.animationName === "btnSlideOut") {
        span.classList.remove("btn-marquee-out");
      }
    });
  });
})();
