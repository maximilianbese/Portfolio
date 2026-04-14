"use strict";

/* ================================================
   BUTTON MARQUEE
   ================================================ */
(function () {
  document.querySelectorAll(".btn").forEach(function (btn) {
    var inner = btn.querySelector(".btn-inner");
    var span = inner ? inner.querySelector("span") : null;
    if (!inner || !span) return;

    var clone = null;
    var rafId = null;
    var offset = 0;
    var spanW = 0;
    var SPEED = 80;
    var last = null;

    function step(ts) {
      if (!last) last = ts;
      var dt = (ts - last) / 1000;
      last = ts;
      offset += SPEED * dt;
      if (offset >= spanW) offset = offset - spanW;
      inner.style.transform = "translateX(" + -offset + "px)";
      rafId = requestAnimationFrame(step);
    }

    btn.addEventListener("mouseenter", function () {
      if (clone) return;
      btn.style.width = btn.getBoundingClientRect().width + "px";
      spanW = span.getBoundingClientRect().width;
      clone = span.cloneNode(true);
      inner.appendChild(clone);
      offset = 0;
      last = null;
      rafId = requestAnimationFrame(step);
    });

    btn.addEventListener("mouseleave", function () {
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
  });
})();

/* ================================================
   i18n — LANGUAGE SWITCH
   ================================================ */
(function () {
  var T = {
    en: {
      nav_about: "About me",
      nav_skills: "Skills",
      nav_projects: "Projects",
      hero_subtitle: "Frontend Developer",
      btn_check: "Check my work",
      btn_contact: "Contact me",
      btn_talk: "Let's Talk",
      btn_send: "Say Hello ;)",
      ticker_remote: "Available for remote work",
      ticker_role: "Frontend Developer",
      ticker_city: "Based in Munich",
      ticker_open: "Open to Opportunities",
      about_label: "Who I Am",
      about_title: "About\u00a0\u00a0me",
      about_bio:
        "Hey there, I'm Maximilian! Write some information about yourself that is IT related. Why are you passionate about coding? What is your source of inspiration for improving your programming skills?",
      about_li1:
        "Where are you based? Would you be open to working remotely or potentially relocating?",
      about_li2:
        "Show that you are open-minded. Are you enthusiastic about learning new technologies and continually improving your skills?",
      about_li3:
        "A brief description of your problem-solving approach. Do you learn from each challenge as you search for the most efficient or elegant solution? You can include some keywords like: analytical thinking, creativity, persistence and collaboration.",
      skills_label: "Technologies",
      skills_title: "Skill Set",
      skills_bio:
        "A short introduction of your skills. Highlight your experience of using different front-end technologies and emphasise your openness to learning and adapting to new technologies. Show how important it is for you to keep up with the rapid changes in web development.",
      skills_cta: 'You need <span class="accent">another skill?</span>',
      skills_sub:
        "Feel free to contact me. I look forward to expanding on my previous knowledge.",
      proj_label: "Portfolio",
      proj_title: "Featured Projects",
      proj_sub:
        "Explore a selection of my work here - Interact with projects to see my skills in action.",
      proj_overlay_sub: "What is this project about?",
      proj_next: "Next project",
      testimonials_title: "What my colleagues say about me",
      contact_label: "Contact me",
      contact_title: "Let's work<br/>together",
      contact_sub: "Got a problem to solve?",
      contact_body:
        "Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work.",
      form_name: "What's your name?",
      form_email: "What's your email?",
      form_msg: "How can I help you?",
      footer_role: "Web Developer",
      footer_city: "Munich Germany",
      footer_legal: "Legal Notice",
    },
    de: {
      nav_about: "\u00dcber mich",
      nav_skills: "F\u00e4higkeiten",
      nav_projects: "Projekte",
      hero_subtitle: "Frontend Entwickler",
      btn_check: "Meine Arbeit",
      btn_contact: "Kontakt",
      btn_talk: "Gespr\u00e4ch starten",
      btn_send: "Nachricht senden",
      ticker_remote: "F\u00fcr Remote-Arbeit verf\u00fcgbar",
      ticker_role: "Frontend Entwickler",
      ticker_city: "Wohnhaft in M\u00fcnchen",
      ticker_open: "Offen f\u00fcr M\u00f6glichkeiten",
      about_label: "Wer ich bin",
      about_title: "\u00dcber\u00a0\u00a0mich",
      about_bio:
        "Hallo, ich bin Maximilian! Schreib hier etwas \u00fcber dich, das IT-bezogen ist. Warum begeistert dich Programmieren? Was inspiriert dich dazu, deine Kenntnisse kontinuierlich zu verbessern?",
      about_li1:
        "Wo wohnst du? W\u00e4rst du offen f\u00fcr Remote-Arbeit oder einen Umzug?",
      about_li2:
        "Zeig, dass du offen bist. Begeisterst du dich f\u00fcr neue Technologien und verbesserst du deine F\u00e4higkeiten kontinuierlich?",
      about_li3:
        "Eine kurze Beschreibung deines Probleml\u00f6sungsansatzes. Lernst du aus jeder Herausforderung? Stichworte: analytisches Denken, Kreativit\u00e4t, Ausdauer und Teamgeist.",
      skills_label: "Technologien",
      skills_title: "Skill Set",
      skills_bio:
        "Eine kurze Vorstellung deiner F\u00e4higkeiten. Hebe deine Erfahrung mit verschiedenen Frontend-Technologien hervor und betone deine Bereitschaft, neue Technologien zu erlernen.",
      skills_cta:
        'Du brauchst eine <span class="accent">weitere F\u00e4higkeit?</span>',
      skills_sub:
        "Kontaktiere mich gerne. Ich freue mich darauf, mein Wissen zu erweitern.",
      proj_label: "Portfolio",
      proj_title: "Ausgew\u00e4hlte Projekte",
      proj_sub:
        "Entdecke eine Auswahl meiner Arbeiten \u2013 Interagiere mit den Projekten, um meine F\u00e4higkeiten in Aktion zu sehen.",
      proj_overlay_sub: "Worum geht es bei diesem Projekt?",
      proj_next: "N\u00e4chstes Projekt",
      testimonials_title: "Was meine Kollegen \u00fcber mich sagen",
      contact_label: "Kontakt",
      contact_title: "Lass uns zusammen<br/>arbeiten",
      contact_sub: "Hast du ein Problem zu l\u00f6sen?",
      contact_body:
        "Beschreibe, welche Rolle dich interessiert und wie ich zu deinem Projekt beitragen kann.",
      form_name: "Wie hei\u00dft du?",
      form_email: "Wie lautet deine E-Mail?",
      form_msg: "Wie kann ich dir helfen?",
      footer_role: "Web Entwickler",
      footer_city: "M\u00fcnchen, Deutschland",
      footer_legal: "Impressum",
    },
  };

  var currentLang = "en";

  function applyLang(lang) {
    currentLang = lang;
    var t = T[lang];

    // Apply all data-i18n elements
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!t[key]) return;
      if (t[key].indexOf("<") !== -1) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    });

    // Placeholders
    var ph = {
      contactName: { en: "Your name goes here", de: "Dein Name" },
      contactEmail: { en: "youremail@email.com", de: "deine@email.de" },
      contactMessage: {
        en: "Hello, I am interested in\u2026",
        de: "Hallo, ich interessiere mich f\u00fcr\u2026",
      },
    };
    Object.keys(ph).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.placeholder = ph[id][lang];
    });

    // Privacy checkbox text (has a link inside)
    var privacySpan = document.querySelector(".form-check-row > span");
    if (privacySpan) {
      if (lang === "de") {
        privacySpan.innerHTML =
          'Ich habe die <a href="#" class="accent mono">Datenschutzerkl\u00e4rung</a> gelesen und stimme der Verarbeitung meiner Daten zu.';
      } else {
        privacySpan.innerHTML =
          'I\'ve read the <a href="#" class="accent mono">privacy policy</a> and agree to the processing of my data as outlined.';
      }
    }

    // Contact CTA line (has a mailto link)
    var ctaP = document.querySelector(".contact-cta");
    if (ctaP) {
      if (lang === "de") {
        ctaP.innerHTML =
          'Brauchst du einen Frontend-Entwickler? <a href="mailto:maximilian-bese@gmx.de" class="accent">Lass uns reden!</a>';
      } else {
        ctaP.innerHTML =
          'Need a Frontend developer? <a href="mailto:maximilian-bese@gmx.de" class="accent">Let\'s talk!</a>';
      }
    }

    // Lang button active state
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle(
        "active",
        btn.textContent.trim().toLowerCase() === lang,
      );
    });

    // Refresh open overlay description if any
    if (typeof updateProjectsLang === "function") updateProjectsLang(lang);
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = this.textContent.trim().toLowerCase();
      if (lang !== currentLang) applyLang(lang);
    });
  });

  window.getCurrentLang = function () {
    return currentLang;
  };
})();

/* ================================================
   PROJECT DATA
   ================================================ */
var PROJECTS = [
  {
    number: "01",
    title: "Join",
    desc: {
      en: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      de: "Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag & Drop, weise Nutzer und Kategorien zu.",
    },
    tech: ["CSS", "HTML", "Firebase", "Angular", "TypeScript"],
    preview: "img/join-preview.png",
    screenshot: "img/join-screenshot.png",
    github: "https://github.com/maximilianbese",
    live: "#",
  },
  {
    number: "02",
    title: "El Pollo Loco",
    desc: {
      en: "A jump-and-run browser game built with object-oriented JavaScript. Fight chickens, collect bottles and coins, and defeat the end boss.",
      de: "Ein Jump-and-Run-Browserspiel mit objektorientiertem JavaScript. K\u00e4mpfe gegen H\u00fchner, sammle Flaschen und M\u00fcnzen und besiege den Endboss.",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    preview: "img/elpollo-preview.png",
    screenshot: "img/elpollo-screenshot.png",
    github: "https://github.com/maximilianbese",
    live: "#",
  },
  {
    number: "03",
    title: "DA Bubble",
    desc: {
      en: "A Slack-inspired real-time messaging app built with Angular and Firebase. Features channels, direct messages, and user management.",
      de: "Eine von Slack inspirierte Echtzeit-Messaging-App mit Angular und Firebase. Mit Kan\u00e4len, Direktnachrichten und Nutzerverwaltung.",
    },
    tech: ["Angular", "Firebase", "TypeScript"],
    preview: "img/dabubble-preview.png",
    screenshot: "img/dabubble-screenshot.png",
    github: "https://github.com/maximilianbese",
    live: "#",
  },
];

var TECH_ICONS = {
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

function updateProjectsLang(lang) {
  var overlay = document.getElementById("projOverlay");
  if (overlay && overlay.classList.contains("open")) {
    var idx = parseInt(overlay.dataset.currentIdx || "0", 10);
    var desc = document.getElementById("overlayDesc");
    if (desc)
      desc.textContent = PROJECTS[idx].desc[lang] || PROJECTS[idx].desc.en;
  }
}

/* ================================================
   PROJECT HOVER PREVIEW + OVERLAY
   ================================================ */
(function () {
  var rows = Array.from(document.querySelectorAll(".project-row"));
  var previewBox = document.getElementById("projectPreviewBox");
  var previewImg = document.getElementById("projectPreviewImg");
  var overlay = document.getElementById("projOverlay");
  var closeBtn = document.getElementById("projOverlayClose");
  var nextBtn = document.getElementById("projNextBtn");
  var currentIdx = 0;

  rows.forEach(function (row, i) {
    row.addEventListener("mouseenter", function () {
      previewImg.src = PROJECTS[i].preview;
      previewBox.classList.add("visible");
      rows.forEach(function (r) {
        r.classList.remove("is-active");
      });
      row.classList.add("is-active");
    });
    row.addEventListener("mouseleave", function () {
      previewBox.classList.remove("visible");
      row.classList.remove("is-active");
    });
    row.addEventListener("click", function () {
      openOverlay(i);
    });
  });

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

    var techEl = document.getElementById("overlayTech");
    techEl.innerHTML = p.tech
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

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeOverlay() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeOverlay);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeOverlay();
  });
  nextBtn.addEventListener("click", function () {
    openOverlay((currentIdx + 1) % PROJECTS.length);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeOverlay();
  });
})();

/* ================================================
   TESTIMONIALS SLIDER
   ================================================ */
(function () {
  var track = document.getElementById("testimonialsTrack");
  var cards = Array.from(track.querySelectorAll(".testimonial-card"));
  var dots = Array.from(document.querySelectorAll(".t-dot"));
  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  var current = 0;
  var total = cards.length;

  function updateSlider() {
    var vw = window.innerWidth;
    var centerW = 620;
    var sideW = 320;
    var overlap = 40;

    cards.forEach(function (card, i) {
      card.classList.remove("t-center", "t-side");
      card.classList.add(i === current ? "t-center" : "t-side");
    });

    var totalBefore = 0;
    for (var i = 0; i < current; i++) {
      totalBefore += sideW - overlap;
    }

    track.style.transform =
      "translateX(" + (vw / 2 - centerW / 2 - totalBefore) + "px)";
    dots.forEach(function (d, i) {
      d.classList.toggle("active", i === current);
    });
  }

  function goTo(idx) {
    current = (idx + total) % total;
    updateSlider();
  }

  prevBtn.addEventListener("click", function () {
    goTo(current - 1);
  });
  nextBtn.addEventListener("click", function () {
    goTo(current + 1);
  });
  dots.forEach(function (d) {
    d.addEventListener("click", function () {
      goTo(+d.dataset.i);
    });
  });
  window.addEventListener("resize", updateSlider);
  updateSlider();
})();

/* ================================================
   CONTACT FORM
   ================================================ */
(function () {
  var nameInput = document.getElementById("contactName");
  var emailInput = document.getElementById("contactEmail");
  var msgInput = document.getElementById("contactMessage");
  var checkBox = document.getElementById("privacyCheck");
  var submitBtn = document.getElementById("submitBtn");
  var feedback = document.getElementById("formFeedback");

  checkBox.addEventListener("click", function () {
    checkBox.classList.toggle("checked");
  });
  checkBox.addEventListener("keydown", function (e) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      checkBox.classList.toggle("checked");
    }
  });

  submitBtn.addEventListener("click", function () {
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = msgInput.value.trim();
    var privacy = checkBox.classList.contains("checked");
    var lang = (window.getCurrentLang && window.getCurrentLang()) || "en";

    var msgs = {
      fill: {
        en: "Please fill in all fields.",
        de: "Bitte alle Felder ausf\u00fcllen.",
      },
      email: {
        en: "Please enter a valid email address.",
        de: "Bitte eine g\u00fcltige E-Mail eingeben.",
      },
      privacy: {
        en: "Please accept the privacy policy.",
        de: "Bitte Datenschutzerkl\u00e4rung akzeptieren.",
      },
      success: {
        en: "Message sent! I'll get back to you soon.",
        de: "Nachricht gesendet! Ich melde mich bald.",
      },
      error: {
        en: "Something went wrong. Please try again.",
        de: "Etwas ist schiefgelaufen. Bitte erneut versuchen.",
      },
      network: {
        en: "Network error. Please try again later.",
        de: "Netzwerkfehler. Bitte sp\u00e4ter erneut versuchen.",
      },
    };

    if (!name || !email || !message) {
      show(msgs.fill[lang], "error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      show(msgs.email[lang], "error");
      return;
    }
    if (!privacy) {
      show(msgs.privacy[lang], "error");
      return;
    }

    setLabel(lang === "de" ? "Wird gesendet\u2026" : "Sending\u2026");
    submitBtn.disabled = true;
    clear();

    fetch("sendMail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, email: email, message: message }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (data.success) {
          show(msgs.success[lang], "success");
          nameInput.value = emailInput.value = msgInput.value = "";
          checkBox.classList.remove("checked");
        } else {
          show(msgs.error[lang], "error");
        }
      })
      .catch(function () {
        show(msgs.network[lang], "error");
      })
      .finally(function () {
        setLabel(lang === "de" ? "Nachricht senden" : "Say Hello ;)");
        submitBtn.disabled = false;
      });
  });

  function setLabel(txt) {
    submitBtn.querySelectorAll(".btn-inner span").forEach(function (s) {
      s.textContent = txt;
    });
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
