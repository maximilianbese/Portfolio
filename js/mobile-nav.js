(function () {
  var btn = document.getElementById("hamburger-btn");
  var menu = document.getElementById("mobile-menu");
  var links = document.querySelectorAll(".mobile-nav-link");
  if (!btn || !menu) return;
  function open() {
    btn.classList.add("is-open");
    menu.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    btn.classList.remove("is-open");
    menu.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  btn.addEventListener("click", function () {
    menu.classList.contains("is-open") ? close() : open();
  });
  menu.addEventListener("click", function (e) {
    if (e.target === menu) close();
  });
  links.forEach(function (l) {
    l.addEventListener("click", close);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 850) close();
  });
})();
function changeLanguage(lang) {
  document.querySelectorAll(".lang").forEach(function (el) {
    el.classList.toggle("active", el.textContent.trim().toLowerCase() === lang);
  });
}
