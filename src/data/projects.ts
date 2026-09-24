// Curated project list, see CLAUDE.md "Content model" for the schema this follows
// and "Pre-filled projects" for what's confirmed vs. still needed from the owner.
//
// Hard rule: invent nothing that isn't in CLAUDE.md or confirmed by the user.
// Every field below that CLAUDE.md marks "Placeholder needed" stays an explicit
// placeholder (bracketed text, empty array, or undefined) rather than a guess,
// EXCEPT `status` and `year`, which CLAUDE.md never specifies per project at all;
// those carry provisional defaults flagged below and in TODO.md for confirmation.
//
// `title`/`description` are per-locale ({ en, fr }): the French column is a
// first-pass translation done at the owner's request and still needs their
// review, same as the English placeholder text it's translated from.

export type ProjectStatus = "stable" | "experimental" | "archived";

// One tag per project is enough for now, no overengineering for six projects.
export type ProjectTag =
  | "game"
  | "tool"
  | "cyber"
  | "web"
  | "backend"
  | "low-level"
  | "industrial";

// "live" = has a playable/visitable link. "writeup-only" = code + explanation,
// optional demo GIF, no live link. Distinction is stated directly in CLAUDE.md.
export type ProjectKind = "live" | "writeup-only";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface LocalizedText {
  en: string;
  fr: string;
}

export interface Project {
  title: LocalizedText;
  slug: string;
  /** PLACEHOLDER when undefined, CLAUDE.md gives no year for any project. */
  year?: number;
  /** PROVISIONAL default, CLAUDE.md gives no status for any project; confirm before launch. */
  status: ProjectStatus;
  kind: ProjectKind;
  /** Shown in the homepage preview (3-4 items). Full list always lives on /projects. */
  featured: boolean;
  tags: ProjectTag[];
  description: LocalizedText;
  /** Empty until real URLs are confirmed, never fabricate a link. */
  links: ProjectLink[];
  /** Local path under /public once an image is supplied. Undefined = no cover yet. */
  cover?: string;
}

export const projects: Project[] = [
  {
    title: {
      en: "Dunji: Dungeon Crawler",
      fr: "Dunji: Dungeon Crawler",
    },
    slug: "unity-game",
    year: 2024,
    status: "experimental",
    kind: "live",
    featured: true,
    tags: ["game"],
    description: {
      en: "Escape the sussy maleficient dungeon !",
      fr: "Echappez-vous d'un donjon extrêment sournois et maléfique !",
    },
    links: [{ label: "Play", url: "/Dunji/" },{ label: "Download", url: "https://massdey.itch.io/dunji" }],  
    cover: "/Dunji/Cover.png",
  },
  {
    title: {
      en: "Urban Wilds: Slay'Em All",
      fr: "Urban Wilds: Slay'Em All",
    },
    slug: "itch-io-game",
    year: 2024,
    status: "stable",
    kind: "live",
    featured: false,
    tags: ["game"],
    description: {
      en: "Animals are invading the city ! You're one of them.",
      fr: "Les animaux ont envahi la ville ! Vous êtes l'un d'entre eux.",
    },
    links: [{ label: "Play", url: "/UrbanWilds/" },{ label: "Download", url: "https://massdey.itch.io/urban-wilds" }],  
    cover: "/UrbanWilds/Cover.png",
  },
  {
    // The JEE original and the Spring Boot rewrite are two separate cards
    // (owner call). Descriptions drawn from CLAUDE.md + the repo descriptions;
    // tweak freely. status/year are provisional, confirm.
    title: {
      en: "JEE Web App",
      fr: "Application web JEE",
    },
    slug: "jee-web-app",
    year: 2023,
    status: "archived",
    kind: "writeup-only",
    featured: false,
    tags: ["web", "backend"],
    description: {
      en: "A group web application built for an engineering-school JEE (Jakarta EE) course.",
      fr: "Une application web réalisée en groupe pour un cours de JEE (Jakarta EE) à l'école d'ingénieur.",
    },
    links: [{ label: "Source Code", url: "https://github.com/MaximeBACQ/JEEProj" }],
  },
  {
    title: {
      en: "Spring Boot Rewrite",
      fr: "Réécriture Spring Boot",
    },
    slug: "spring-boot-rewrite",
    year: 2023,
    status: "experimental",
    kind: "writeup-only",
    featured: false,
    tags: ["web", "backend"],
    description: {
      en: "The same engineering-school app rebuilt from the ground up in Spring Boot, a side-by-side with the original JEE version.",
      fr: "La même application d'école ré-implémentée entièrement en Spring Boot, un comparatif direct avec la version JEE d'origine.",
    },
    links: [{ label: "Source Code", url: "https://github.com/MaximeBACQ/SpringProject" }],
  },
  {
    title: {
      en: "ELF Infector",
      fr: "ELF Infector",
    },
    slug: "elf-infector",
    year: 2025,
    status: "experimental",
    kind: "writeup-only",
    featured: true,
    tags: ["cyber", "low-level"],
    // Description drawn from the project's own README; tweak freely.
    description: {
      en: "A proof-of-concept ELF infector: it rewrites a binary's PT_NOTE segment into a PT_LOAD segment to run custom x86-64 shellcode, a study of ELF internals and code injection.",
      fr: "Un PoC d'infection d'ELF : il transforme le segment PT_NOTE d'un binaire en segment PT_LOAD pour exécuter un shellcode x86-64 maison, une étude des entrailles du format ELF et de l'injection de code.",
    },
    links: [{ label: "Demo Video", url: "/writeups/elf-infector" },{ label: "Source Code", url: "https://github.com/MaximeBACQ/ELFInfector" }],
    cover: "/ELFInfector/Cover.png"
  },
  {
    title: {
      en: "SCADA Flask / FactoryIO",
      fr: "SCADA Flask / FactoryIO",
    },
    slug: "scada-flask-factoryio",
    year: 2025,
    status: "experimental",
    kind: "writeup-only",
    featured: true,
    tags: ["cyber", "industrial"],
    // Description drawn from the project's own README; tweak freely.
    description: {
      en: "A short study of SCADA security flaws: a Flask interface takes manual Modbus control of coils in a FactoryIO sorting line, showing how an operator UI can override the process, and how to secure it.",
      fr: "Une courte étude des failles de sécurité SCADA : une interface Flask prend le contrôle manuel de bobines Modbus sur une ligne de tri FactoryIO, montrant comment une IHM peut détourner le procédé, et comment le sécuriser.",
    },
    links: [{ label: "Writeup", url: "/writeups/scada-flask-factoryio" },{ label: "Source Code", url: "https://github.com/MaximeBACQ/SCADA_Flask_Interface" }],
    cover: "/FactoryIO_Flask/Cover.png"
  },
  {
    // Self-hosted static page under /public/Repos, served at /Repos/ (owner
    // request: a single "Use" link, no source). year/status provisional.
    title: {
      en: "La game du repos",
      fr: "La game du repos",
    },
    slug: "la-game-du-repos",
    year: 2021,
    status: "stable",
    kind: "live",
    featured: false,
    tags: ["game"],
    description: {
      en: "League of Legends games can drag on and wear you out. La game du repos fixes that: start a round with the button made for it, then the moment you hear a sound, press the S key and don't touch anything for 5 seconds. After that you can carry on. Rested, refreshed, and maybe staring at a grey screen.",
      fr: "Parfois, les parties de league of legends peuvent s'avérer longues et énergivores. La game du repos règlera ce problème : lancez la partie avec le bouton prévu à cet effet et appuyez sur le bouton S puis ne touchez plus à rien pendant 5 secondes dès lors que vous entendez un son. Vous pourrez reprendre après ce temps. Reposé, frais et peut-être en écran gris.",
    },
    links: [{ label: "Use", url: "/Repos/" }],
  },
  {
    // PowerShell web tool; source-only card (no hosted demo). year provisional.
    title: {
      en: "OWA Policy Editor",
      fr: "OWA Policy Editor",
    },
    slug: "owa-policy-editor",
    year: 2026,
    status: "stable",
    kind: "writeup-only",
    featured: false,
    tags: ["tool", "web"],
    description: {
      en: "A tool that signs in through Microsoft's API to edit Outlook Web App (OWA) settings, built purely to save time on repetitive admin changes.",
      fr: "Un outil qui se connecte via l'API de Microsoft pour modifier les paramètres d'Outlook Web App (OWA), conçu pour gagner du temps sur des changements d'administration répétitifs.",
    },
    links: [{ label: "Source Code", url: "https://github.com/MaximeBACQ/OWA_PolicyEditor" }],
  },
  {
    // Terminal C game; source-only card. Description condensed from the repo
    // README (usage guide). status/year provisional.
    title: {
      en: "Traverse",
      fr: "Traverse",
    },
    slug: "traverse",
    status: "archived",
    kind: "writeup-only",
    featured: false,
    tags: ["game", "low-level"],
    description: {
      en: "A turn-based board game written in C, played in the terminal: 2 to 4 players or one-versus-AI on a 10x10 grid, with saved games you can resume.",
      fr: "Un jeu de plateau au tour par tour écrit en C, jouable dans la console : de 2 à 4 joueurs ou en solo contre l'IA sur une grille 10x10, avec sauvegarde et reprise de partie.",
    },
    links: [{ label: "Source Code", url: "https://github.com/MaximeBACQ/Traverse" }],
  },
  {
    // L-system fractal renderer (Tkinter + turtle desktop app); source-only
    // card, can't run in-browser. Dates ~2020-2021 per the file header.
    title: {
      en: "FractalDrawer",
      fr: "FractalDrawer",
    },
    slug: "fractal-drawer",
    year: 2021,
    status: "archived",
    kind: "writeup-only",
    featured: false,
    tags: ["tool"],
    description: {
      en: "A Python app that draws L-system fractals from axioms defined as simple JSON files (rules, angle, depth, size), rendered with turtle graphics.",
      fr: "Une application Python qui dessine des fractales de type L-système à partir d'axiomes définis dans de simples fichiers JSON (règles, angle, niveau, taille), rendues avec le module turtle.",
    },
    links: [{ label: "Source Code", url: "https://github.com/MaximeBACQ/FractalDrawer" }],
  },
  // NOTE: the "Labs / experiments" placeholder card was removed (owner call),
  // re-add a real entry here when a small experiment is ready to show.
];
