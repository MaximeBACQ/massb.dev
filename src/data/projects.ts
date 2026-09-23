// Curated project list — see CLAUDE.md "Content model" for the schema this follows
// and "Pre-filled projects" for what's confirmed vs. still needed from the owner.
//
// Hard rule: invent nothing that isn't in CLAUDE.md or confirmed by the user.
// Every field below that CLAUDE.md marks "Placeholder needed" stays an explicit
// placeholder (bracketed text, empty array, or undefined) rather than a guess —
// EXCEPT `status` and `year`, which CLAUDE.md never specifies per project at all;
// those carry provisional defaults flagged below and in TODO.md for confirmation.
//
// `title`/`description` are per-locale ({ en, fr }): the French column is a
// first-pass translation done at the owner's request and still needs their
// review, same as the English placeholder text it's translated from.

export type ProjectStatus = "stable" | "experimental" | "archived";

// One tag per project is enough for now — no overengineering for six projects.
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
  /** PLACEHOLDER when undefined — CLAUDE.md gives no year for any project. */
  year?: number;
  /** PROVISIONAL default — CLAUDE.md gives no status for any project; confirm before launch. */
  status: ProjectStatus;
  kind: ProjectKind;
  /** Shown in the homepage preview (3-4 items). Full list always lives on /projects. */
  featured: boolean;
  tags: ProjectTag[];
  description: LocalizedText;
  /** Empty until real URLs are confirmed — never fabricate a link. */
  links: ProjectLink[];
  /** Local path under /public once an image is supplied. Undefined = no cover yet. */
  cover?: string;
}

export const projects: Project[] = [
  {
    title: {
      en: "[Dunji - Dungeon Crawler]",
      fr: "[Dunji - Dungeon Crawler]",
    },
    slug: "unity-game",
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
      en: "[Urban Wilds - Slay'Em All]",
      fr: "[Urban Wilds - Slay'Em All]",
    },
    slug: "itch-io-game",
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
    title: {
      en: "JEE to Spring Boot",
      fr: "JEE to Spring Boot",
    },
    slug: "jee-to-spring-boot",
    status: "archived",
    kind: "writeup-only",
    featured: false,
    tags: ["web", "backend"],
    description: {
      en: "[Placeholder — confirm final description. Draft from CLAUDE.md: same app ported from JEE to Spring Boot.]",
      fr: "[Espace réservé — description finale à confirmer. Brouillon d'après CLAUDE.md : la même application portée de JEE vers Spring Boot.]",
    },
    links: [{ label: "Use", url: "/JeeToSpring/" },{ label: "Source Code", url: "https://github.com/MaximeBACQ/JEEProj" }],  
  },
  {
    title: {
      en: "ELF Infector",
      fr: "ELF Infector",
    },
    slug: "elf-infector",
    status: "experimental",
    kind: "writeup-only",
    featured: true,
    tags: ["cyber", "low-level"],
    description: {
      en: "[Placeholder — confirm final description. Draft from CLAUDE.md: PoC shellcode injection in x86_64 assembly (ELF format study).]",
      fr: "[Espace réservé — description finale à confirmer. Brouillon d'après CLAUDE.md : PoC d'injection de shellcode en assembleur x86_64 (étude du format ELF).]",
    },
    links: [],
  },
  {
    title: {
      en: "SCADA Flask / FactoryIO",
      fr: "SCADA Flask / FactoryIO",
    },
    slug: "scada-flask-factoryio",
    status: "experimental",
    kind: "writeup-only",
    featured: true,
    tags: ["cyber", "industrial"],
    description: {
      en: "[Placeholder — confirm final description. Draft from CLAUDE.md: SCADA (Modbus) flaw demo + Flask control interface.]",
      fr: "[Espace réservé — description finale à confirmer. Brouillon d'après CLAUDE.md : démonstration d'une faille SCADA (Modbus) + interface de contrôle Flask.]",
    },
    links: [],
  },
  {
    title: {
      en: "[Labs / experiments — no sub-projects confirmed yet]",
      fr: "[Labs / expérimentations — aucun sous-projet confirmé pour l'instant]",
    },
    slug: "labs-experiments",
    status: "experimental",
    kind: "writeup-only",
    featured: false,
    tags: [],
    description: {
      en: "[Placeholder — CLAUDE.md: light category for small fun/vibe-coded sites, all placeholders for now (titles, links, descriptions TBD).]",
      fr: "[Espace réservé — CLAUDE.md : catégorie légère pour de petits sites faits pour le plaisir/vibe-codés, tout reste à définir (titres, liens, descriptions).]",
    },
    links: [],
  },
];
