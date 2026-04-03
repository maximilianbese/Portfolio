"use strict";

/* ═══════════════════════════════════════════════
   PROJECTS
════════════════════════════════════════════════ */
var PROJECTS = [
  {
    number: "01",
    title: "Join",
    desc: {
      en: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop, assign users and categories.",
      de: "Aufgabenmanager inspiriert vom Kanban-System. Aufgaben per Drag & Drop erstellen, Nutzer und Kategorien zuweisen.",
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
      en: "A jump-and-run browser game built with object-oriented JavaScript. Fight chickens, collect bottles and coins, defeat the end boss.",
      de: "Jump-and-Run-Browserspiel mit OOP-JavaScript. Hühner bekämpfen, Flaschen und Münzen sammeln, Endboss besiegen.",
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
      de: "Slack-inspirierte Echtzeit-Messaging-App mit Angular und Firebase. Mit Kanälen, Direktnachrichten und Nutzerverwaltung.",
    },
    tech: ["Angular", "Firebase", "TypeScript"],
    preview: "img/dabubble-preview.png",
    screenshot: "img/dabubble-screenshot.png",
    github: "https://github.com/maximilianbese",
    live: "#",
  },
];

/* ═══════════════════════════════════════════════
   TECH ICONS
════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════
   SKILLS GRID DATA
════════════════════════════════════════════════ */
var SKILLS = [
  { name: "HTML", icon: "img" },
  { name: "CSS", icon: "img" },
  { name: "JavaScript", icon: "img" },
  { name: "TypeScript", icon: "img" },
  { name: "Angular", icon: "img" },
  { name: "Git", icon: "img" },
  { name: "Firebase", icon: "img" },
  { name: "REST-API", icon: "svg-api" },
  { name: "Scrum", icon: "svg-scrum" },
  { name: "Material Design", icon: "svg-md" },
  { name: "Supabase", icon: "svg-sb" },
  { name: "Growth mindset", icon: "svg-gm" },
];

/* ═══════════════════════════════════════════════
   TRANSLATIONS
════════════════════════════════════════════════ */
var TRANSLATIONS = {
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
      "A brief description of your problem-solving approach. Do you learn from each challenge as you search for the most efficient or elegant solution?",
    skills_label: "Technologies",
    skills_title: "Skill Set",
    skills_bio:
      "A short introduction of your skills. Highlight your experience of using different front-end technologies and emphasise your openness to learning and adapting to new technologies.",
    skills_cta: 'You need <span class="accent">another skill?</span>',
    skills_sub:
      "Feel free to contact me. I look forward to expanding on my previous knowledge.",
    proj_label: "Portfolio",
    proj_title: "Featured Projects",
    proj_sub:
      "Explore a selection of my work here \u2014 Interact with projects to see my skills in action.",
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

/* ═══════════════════════════════════════════════
   RENDER SKILLS GRID
════════════════════════════════════════════════ */
(function renderSkills() {
  var grid = document.getElementById("skillsGrid");
  if (!grid) return;

  var svgs = {
    "svg-api":
      '<svg viewBox="0 0 48 48" width="44" height="44" fill="white"><rect x="2" y="14" width="44" height="20" rx="4"/><text x="24" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#111" font-family="monospace">API</text></svg>',
    "svg-scrum":
      '<svg viewBox="0 0 48 48" width="44" height="44" fill="none"><circle cx="24" cy="24" r="20" stroke="white" stroke-width="2.5"/><path d="M16 32 Q24 8 32 32" stroke="white" stroke-width="2.5"/><path d="M29 24 L36 30" stroke="white" stroke-width="2.5" stroke-linecap="round"/></svg>',
    "svg-md":
      '<svg viewBox="0 0 48 48" width="44" height="44"><path d="M24 4L4 44h40L24 4z" fill="none" stroke="white" stroke-width="3"/><path d="M14 32h20M19 20h10" stroke="white" stroke-width="2.5" stroke-linecap="round"/></svg>',
    "svg-sb":
      '<svg viewBox="0 0 48 48" width="44" height="44" fill="none"><polygon points="24,4 44,14 44,34 24,44 4,34 4,14" stroke="white" stroke-width="2.5"/><path d="M24 4v40M4 14l40 20M44 14L4 34" stroke="white" stroke-width="1.5" stroke-opacity="0.4"/></svg>',
    "svg-gm":
      '<svg viewBox="0 0 48 48" width="44" height="44" fill="none"><circle cx="24" cy="24" r="20" stroke="#4ed9c2" stroke-width="2.5"/><path d="M16 18h8M16 24h14M16 30h10" stroke="#4ed9c2" stroke-width="2.5" stroke-linecap="round"/><circle cx="36" cy="18" r="5" stroke="#4ed9c2" stroke-width="2"/></svg>',
  };

  grid.innerHTML = SKILLS.map(function (s) {
    var iconHtml =
      s.icon === "img"
        ? '<img src="' + TECH_ICONS[s.name] + '" alt="' + s.name + '"/>'
        : svgs[s.icon] || "";
    return (
      '<div class="skill-item"><div class="skill-icon">' +
      iconHtml +
      "</div><span>" +
      s.name +
      "</span></div>"
    );
  }).join("");
})();
