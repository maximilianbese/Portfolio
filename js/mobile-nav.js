"use strict";

(function () {
  const btn = document.getElementById("hamburger-btn");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-nav-link");
  if (!btn || !menu) return;

  const open = () => {
    btn.classList.add("is-open");
    menu.classList.add("is-open");
    document.body.style.overflow = "hidden";
    btn.setAttribute("aria-expanded", "true");
  };

  const close = () => {
    btn.classList.remove("is-open");
    menu.classList.remove("is-open");
    document.body.style.overflow = "";
    btn.setAttribute("aria-expanded", "false");
  };

  btn.addEventListener("click", () =>
    menu.classList.contains("is-open") ? close() : open(),
  );
  menu.addEventListener("click", (e) => {
    if (e.target === menu) close();
  });
  links.forEach((l) => l.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 850) close();
  });
})();
