/* ================================================
   PROJECT DATA
   Fill in your own GitHub / Live URLs and image paths
   ================================================ */
const PROJECTS = [
  {
    number: "01",
    title: "Join",
    sub: "What is this project about?",
    desc: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    tech: ["CSS", "HTML", "Firebase", "Angular", "TypeScript"],
    preview: "img/join-preview.png",
    screenshot: "img/join-screenshot.png",
    github: "https://github.com/maximilianbese",
    live: "#",
  },
  {
    number: "02",
    title: "El Pollo Loco",
    sub: "What is this project about?",
    desc: "A jump-and-run browser game built with object-oriented JavaScript. Fight chickens, collect bottles and coins, and defeat the end boss.",
    tech: ["HTML", "CSS", "JavaScript"],
    preview: "img/elpollo-preview.png",
    screenshot: "img/elpollo-screenshot.png",
    github: "https://github.com/maximilianbese",
    live: "#",
  },
  {
    number: "03",
    title: "DA Bubble",
    sub: "What is this project about?",
    desc: "A Slack-inspired real-time messaging app built with Angular and Firebase. Features channels, direct messages, and user management.",
    tech: ["Angular", "Firebase", "TypeScript"],
    preview: "img/dabubble-preview.png",
    screenshot: "img/dabubble-screenshot.png",
    github: "https://github.com/maximilianbese",
    live: "#",
  },
];

/* Tech icon map */
const TECH_ICONS = {
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
};

/* ================================================
   PROJECT HOVER PREVIEW + OVERLAY
   ================================================ */
(function () {
  const rows = Array.from(document.querySelectorAll(".project-row"));
  const previewBox = document.getElementById("projectPreviewBox");
  const previewImg = document.getElementById("projectPreviewImg");
  const overlay = document.getElementById("projOverlay");
  const closeBtn = document.getElementById("projOverlayClose");
  const nextBtn = document.getElementById("projNextBtn");

  let currentOverlayIdx = 0;

  /* ---------- HOVER PREVIEW ---------- */
  rows.forEach((row, i) => {
    row.addEventListener("mouseenter", () => {
      const p = PROJECTS[i];
      previewImg.src = p.preview;
      previewBox.classList.add("visible");
      rows.forEach((r) => r.classList.remove("is-active"));
      row.classList.add("is-active");
    });
    row.addEventListener("mouseleave", () => {
      previewBox.classList.remove("visible");
      row.classList.remove("is-active");
    });

    /* ---------- CLICK → OPEN OVERLAY ---------- */
    row.addEventListener("click", () => openOverlay(i));
  });

  /* ---------- OVERLAY ---------- */
  function openOverlay(idx) {
    currentOverlayIdx = idx;
    const p = PROJECTS[idx];

    document.getElementById("overlayNumber").textContent = p.number;
    document.getElementById("overlayTitle").textContent = p.title;
    document.getElementById("overlayDesc").textContent = p.desc;
    document.getElementById("overlayScreenshot").src = p.screenshot;
    document.getElementById("overlayScreenshot").alt = p.title;
    document.getElementById("overlayGithub").href = p.github;
    document.getElementById("overlayLive").href = p.live;

    // Tech icons
    const techEl = document.getElementById("overlayTech");
    techEl.innerHTML = p.tech
      .map((t) => {
        const src = TECH_ICONS[t] || "";
        return `<span class="proj-tech-icon">
        ${src ? `<img src="${src}" alt="${t}"/>` : ""}
        ${t}
      </span>`;
      })
      .join("");

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeOverlay() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeOverlay);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeOverlay();
  });

  nextBtn.addEventListener("click", () => {
    openOverlay((currentOverlayIdx + 1) % PROJECTS.length);
  });

  // ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOverlay();
  });
})();

/* ================================================
   TESTIMONIALS SLIDER
   ================================================ */
(function () {
  const track = document.getElementById("testimonialsTrack");
  const cards = Array.from(track.querySelectorAll(".testimonial-card"));
  const dots = Array.from(document.querySelectorAll(".t-dot"));
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let current = 0;
  const total = cards.length;

  function updateSlider() {
    const vw = window.innerWidth;
    const centerW = 620;
    const sideW = 320;
    const overlap = 40;

    cards.forEach((card, i) => {
      card.classList.remove("t-center", "t-side");
      card.classList.add(i === current ? "t-center" : "t-side");
    });

    let totalBefore = 0;
    for (let i = 0; i < current; i++) {
      totalBefore += sideW - overlap;
    }

    const trackShift = vw / 2 - centerW / 2 - totalBefore;
    track.style.transform = `translateX(${trackShift}px)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  function goTo(idx) {
    current = (idx + total) % total;
    updateSlider();
  }

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));
  dots.forEach((d) => d.addEventListener("click", () => goTo(+d.dataset.i)));
  window.addEventListener("resize", updateSlider);
  updateSlider();
})();

/* ================================================
   CONTACT FORM
   ================================================ */
(function () {
  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const msgInput = document.getElementById("contactMessage");
  const checkBox = document.getElementById("privacyCheck");
  const submitBtn = document.getElementById("submitBtn");
  const feedback = document.getElementById("formFeedback");

  checkBox.addEventListener("click", () =>
    checkBox.classList.toggle("checked"),
  );
  checkBox.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      checkBox.classList.toggle("checked");
    }
  });

  submitBtn.addEventListener("click", async () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = msgInput.value.trim();
    const privacy = checkBox.classList.contains("checked");

    if (!name || !email || !message) {
      show("Please fill in all fields.", "error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      show("Please enter a valid email address.", "error");
      return;
    }
    if (!privacy) {
      show("Please accept the privacy policy.", "error");
      return;
    }

    setLabel("Sending…");
    submitBtn.disabled = true;
    clear();

    try {
      const res = await fetch("sendMail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (data.success) {
        show("Message sent! I'll get back to you soon.", "success");
        nameInput.value = emailInput.value = msgInput.value = "";
        checkBox.classList.remove("checked");
      } else {
        show("Something went wrong. Please try again.", "error");
      }
    } catch {
      show("Network error. Please try again later.", "error");
    } finally {
      setLabel("Say Hello ;)");
      submitBtn.disabled = false;
    }
  });

  function setLabel(txt) {
    submitBtn
      .querySelectorAll(".btn-inner span")
      .forEach((s) => (s.textContent = txt));
  }
  function show(msg, type) {
    feedback.textContent = msg;
    feedback.className = "form-feedback " + type;
  }
  function clear() {
    feedback.textContent = "";
    feedback.className = "form-feedback";
  }
})();

/* ================================================
   LANG SWITCH
   ================================================ */
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".lang-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
  });
});
