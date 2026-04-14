const projectItems = document.querySelectorAll(".project-item");
const previewImage = document.getElementById("project-image");

// 1. Projektdaten zentral speichern
const projectData = {
  join: {
    number: "01",
    title: "Join",
    descKey: "desc_join",
    img: "./assets/img/join-preview.png",
    tech: ["CSS", "HTML", "Firebase", "Angular", "TypeScript"],
    github: "https://github.com/dein-profil/join",
    live: "https://join.maximilian-bese.de/",
  },
  loco: {
    number: "02",
    title: "El Pollo Loco",
    descKey: "desc_loco",
    img: "./assets/img/elpollo-preview.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/dein-profil/pollo-loco",
    live: "https://el-pollo-loco.maximilian-bese.de/",
  },
  bubble: {
    number: "03",
    title: "DA Bubble",
    descKey: "desc_bubble",
    img: "./assets/img/bubble-preview.png",
    tech: ["Angular", "Firebase", "TypeScript"],
    github: "https://github.com/dein-profil/da-bubble",
    live: "https://dein-projekt-bubble.de",
  },
};

// --- HOVER LOGIK (für die Hauptseite) ---
projectItems.forEach((item) => {
  const projectKey = item.getAttribute("data-project");

  item.addEventListener("mouseenter", () => {
    projectItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    previewImage.style.opacity = 0;
    setTimeout(() => {
      previewImage.src = projectData[projectKey].img;
      previewImage.style.opacity = 1;
    }, 150);
  });

  item.addEventListener("click", () => {
    openProject(projectKey);
  });
});

// --- OVERLAY LOGIK ---

function openProject(projectId) {
  const project = projectData[projectId];
  const lang = localStorage.getItem("preferredLang") || "en";

  window.currentProjectId = projectId;

  // Texte füllen
  document.getElementById("overlay-number").innerText = project.number;
  document.getElementById("overlay-title").innerText = project.title;

  // Beschreibung (Sicherstellen, dass translations geladen ist)
  if (typeof translations !== "undefined") {
    document.getElementById("overlay-description").innerText =
      translations[lang][project.descKey];
  }

  document.getElementById("overlay-img-src").src = project.img;
  document.getElementById("overlay-github").href = project.github;
  document.getElementById("overlay-live").href = project.live;

  // --- TECH-STACK LOGOS GENERIEREN ---
  const techContainer = document.getElementById("overlay-tech");
  techContainer.innerHTML = ""; // Leeren

  project.tech.forEach((techName) => {
    // Wrapper erstellen
    const techWrapper = document.createElement("div");
    techWrapper.classList.add("tech-icon-wrapper");

    // Bild erstellen (Pfad: ./assets/icons/name-logo.svg)
    const img = document.createElement("img");
    const fileName = techName.toLowerCase().replace(/\s+/g, "-");
    img.src = `./assets/icons/green-${fileName}-logo.svg`;
    img.alt = techName;
    img.classList.add("overlay-tech-icon");

    // Falls das Icon nicht gefunden wird, wird nur der Text gezeigt
    img.onerror = function () {
      this.style.display = "none";
    };

    // Text erstellen
    const span = document.createElement("span");
    span.innerText = techName;

    techWrapper.appendChild(img);
    techWrapper.appendChild(span);
    techContainer.appendChild(techWrapper);
  });

  // Overlay sichtbar machen
  const overlay = document.getElementById("project-overlay");
  overlay.classList.remove("d-none");
  document.body.style.overflow = "hidden";
}

function closeOverlay() {
  document.getElementById("project-overlay").classList.add("d-none");
  document.body.style.overflow = "auto";
  window.currentProjectId = null;
}

function nextProject() {
  const keys = Object.keys(projectData);
  let currentIndex = keys.indexOf(window.currentProjectId);
  let nextIndex = (currentIndex + 1) % keys.length;
  openProject(keys[nextIndex]);
}

// Schließen bei Klick auf den Hintergrund
window.addEventListener("click", (event) => {
  const overlay = document.getElementById("project-overlay");
  if (event.target === overlay) {
    closeOverlay();
  }
});
