"use strict";

/* ═══════════════════════════════════════════════
   PROJECTS — list render, hover preview, overlay
════════════════════════════════════════════════ */
(function () {
  var currentIdx = 0;

  /* ── DOM refs ── */
  var listEl = document.getElementById("projectsList");
  var previewBox = document.getElementById("projectPreviewBox");
  var previewImg = document.getElementById("projectPreviewImg");
  var overlay = document.getElementById("projOverlay");
  var closeBtn = document.getElementById("projOverlayClose");
  var nextBtn = document.getElementById("projNextBtn");

  /* ── Build project list rows ── */
  function renderList() {
    var divider = '<div class="project-divider"></div>';
    listEl.innerHTML =
      divider +
      PROJECTS.map(function (p, i) {
        return (
          '<div class="project-row" data-index="' +
          i +
          '">' +
          '<span class="project-name">' +
          p.title +
          ' <span class="proj-arrow-inline">↗</span></span>' +
          '<span class="project-stack">' +
          p.tech.join(" | ") +
          "</span>" +
          "</div>" +
          divider
        );
      }).join("");
    bindRowEvents();
  }

  /* ── Bind hover + click on rows ── */
  function bindRowEvents() {
    document.querySelectorAll(".project-row").forEach(function (row, i) {
      row.addEventListener("mouseenter", function () {
        showPreview(i, row);
      });
      row.addEventListener("mouseleave", hidePreview);
      row.addEventListener("click", function () {
        openOverlay(i);
      });
    });
  }

  function showPreview(i, row) {
    previewImg.src = PROJECTS[i].preview;
    previewBox.classList.add("visible");
    document.querySelectorAll(".project-row").forEach(function (r) {
      r.classList.remove("is-active");
    });
    row.classList.add("is-active");
  }

  function hidePreview(row) {
    previewBox.classList.remove("visible");
    if (row && row.target) row.target.classList.remove("is-active");
  }

  /* ── Overlay open/close ── */
  function openOverlay(idx) {
    currentIdx = idx;
    overlay.dataset.currentIdx = idx;
    var p = PROJECTS[idx];
    var lang = (window.getCurrentLang && window.getCurrentLang()) || "en";

    document.getElementById("overlayNumber").textContent = p.number;
    document.getElementById("overlayTitle").textContent = p.title;
    document.getElementById("overlayDesc").textContent =
      p.desc[lang] || p.desc.en;
    document.getElementById("overlayScreenshot").src = p.screenshot;
    document.getElementById("overlayScreenshot").alt = p.title;
    document.getElementById("overlayGithub").href = p.github;
    document.getElementById("overlayLive").href = p.live;

    renderTechIcons(p.tech);
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeOverlay() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  function renderTechIcons(tech) {
    var el = document.getElementById("overlayTech");
    el.innerHTML = tech
      .map(function (name) {
        var src = TECH_ICONS[name] || "";
        return (
          '<span class="proj-tech-icon">' +
          (src ? '<img src="' + src + '" alt="' + name + '"/>' : "") +
          " " +
          name +
          "</span>"
        );
      })
      .join("");
  }

  /* ── Event bindings ── */
  closeBtn.addEventListener("click", closeOverlay);
  nextBtn.addEventListener("click", function () {
    openOverlay((currentIdx + 1) % PROJECTS.length);
  });
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeOverlay();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeOverlay();
  });

  /* ── Refresh overlay desc on lang change ── */
  window.onLangChange = function (lang) {
    if (!overlay.classList.contains("open")) return;
    var p = PROJECTS[parseInt(overlay.dataset.currentIdx || "0", 10)];
    document.getElementById("overlayDesc").textContent =
      p.desc[lang] || p.desc.en;
  };

  renderList();
})();
