// Site copy, per locale. English is the confirmed source (see CLAUDE.md); the
// French column is a first-pass translation done at the owner's request —
// wording is expected to be reviewed/adjusted by the owner, not final.

export const languages = {
  en: "EN",
  fr: "FR",
} as const;

export const defaultLang = "fr";

export const ui = {
  en: {
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.eyebrow": "SELF-HOSTED WORKSHOP",
    "hero.headline":
      "I build apps, security tools, games, or anything that feels like it could be\nfun or help me.",
    "hero.headlineHighlight": "fun or help me",
    "hero.tagline": "Everything here runs on my personal homelab.",
    "hero.selfHostLine": "Self-hosted on my own homelab.",
    "hero.cta.primary": "See projects",
    "hero.cta.secondary": "How it's hosted",

    "twoLanes.security": "Secured by design",
    "twoLanes.dev.eyebrow": "Development",
    "twoLanes.dev.heading": "What I build",
    "twoLanes.dev.intro":
      "Games, apps and security tools — the things I like building.",
    "twoLanes.dev.item.1": "Unity & web games",
    "twoLanes.dev.item.2": "Full-stack apps",
    "twoLanes.dev.item.3": "Security PoCs & writeups",
    "twoLanes.dev.item.4": "Low-level / assembly",
    "twoLanes.infra.eyebrow": "Infrastructure & self-hosting",
    "twoLanes.infra.heading": "How it runs",
    "twoLanes.infra.intro":
      "The homelab that runs everything here, including this site.",
    "twoLanes.infra.item.1": "Proxmox virtualization",
    "twoLanes.infra.item.2": "OPNsense firewall & routing",
    "twoLanes.infra.item.3": "Reverse proxy + TLS",
    "twoLanes.infra.item.4": "Docker-hosted services — this site included",
    "twoLanes.infra.item.5": "3-2-1 backups",

    "projects.eyebrow": "Projects",
    "projects.preview.heading": "Selected work",
    "projects.all": "All projects →",
    "projects.page.heading": "All projects",
    "projects.filter.type": "Type",
    "projects.filter.status": "Status",
    "projects.filter.all": "All",
    "projects.empty": "No projects match the selected filters.",
    "projects.writeupOnly": "Writeup-only",
    "projects.linksTbd": "Links: TBD",
    "projects.noCover": "No cover yet",
    "projects.yearTbd": "TBD",

    "status.stable": "stable",
    "status.experimental": "experimental",
    "status.archived": "archived",

    "tag.game": "game",
    "tag.tool": "tool",
    "tag.cyber": "cyber",
    "tag.web": "web",
    "tag.backend": "backend",
    "tag.low-level": "low-level",
    "tag.industrial": "industrial",

    "contact.eyebrow": "Contact",
    "contact.heading": "Get in touch",
    "contact.intro": "[Placeholder — confirm wording]",
    "contact.email": "Email",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.email.value": "[email — placeholder]",
    "contact.github.value": "[github url — placeholder]",
    "contact.linkedin.value": "[linkedin url — placeholder]",

    "hostedAtHome.eyebrow": "HOSTED AT HOME",
    "hostedAtHome.heading": "How it's hosted",
    "hostedAtHome.intro": "[Placeholder — confirm wording]",
    "hostedAtHome.item.proxmox": "Proxmox",
    "hostedAtHome.item.opnsense": "OPNsense",
    "hostedAtHome.item.proxy": "Reverse proxy",
    "hostedAtHome.item.docker": "Docker",
    "hostedAtHome.item.tls": "TLS",
    "hostedAtHome.item.backups": "3-2-1 backups",
    "hostedAtHome.detail": "[Placeholder — confirm details]",

    "about.eyebrow": "About",
    "about.heading": "About",
    "about.body": "[Placeholder — confirm wording]",

    "footer.status": "Status",
    "footer.graph": "Graph",
    "footer.account": "Account",

    "site.description":
      "[Placeholder site description — confirm positioning line.]",
  },
  fr: {
    "nav.projects": "Projets",
    "nav.contact": "Contact",

    "hero.eyebrow": "ATELIER AUTO-HÉBERGÉ",
    "hero.headline":
      "Je construis des applis, des outils de sécurité, des jeux, ou tout ce qui me semble\namusant ou utile.",
    "hero.headlineHighlight": "amusant ou utile",
    "hero.tagline": "Tout ce qui est ici tourne sur mon homelab personnel.",
    "hero.selfHostLine": "Auto-hébergé sur mon propre homelab.",
    "hero.cta.primary": "Voir les projets",
    "hero.cta.secondary": "Comment c'est hébergé",

    "twoLanes.security": "Sécurisé par conception",
    "twoLanes.dev.eyebrow": "Développement",
    "twoLanes.dev.heading": "Ce que je construis",
    "twoLanes.dev.intro":
      "Des jeux, des applis et des outils de sécurité — ce que j'aime construire.",
    "twoLanes.dev.item.1": "Jeux Unity & web",
    "twoLanes.dev.item.2": "Applis full-stack",
    "twoLanes.dev.item.3": "PoC de sécurité & writeups",
    "twoLanes.dev.item.4": "Bas niveau / assembleur",
    "twoLanes.infra.eyebrow": "Infrastructure & auto-hébergement",
    "twoLanes.infra.heading": "Comment ça tourne",
    "twoLanes.infra.intro":
      "Le homelab qui fait tourner tout ici, y compris ce site.",
    "twoLanes.infra.item.1": "Virtualisation Proxmox",
    "twoLanes.infra.item.2": "Pare-feu & routage OPNsense",
    "twoLanes.infra.item.3": "Reverse proxy + TLS",
    "twoLanes.infra.item.4": "Services hébergés sous Docker — ce site inclus",
    "twoLanes.infra.item.5": "Sauvegardes 3-2-1",

    "projects.eyebrow": "Projets",
    "projects.preview.heading": "Projets sélectionnés",
    "projects.all": "Tous les projets →",
    "projects.page.heading": "Tous les projets",
    "projects.filter.type": "Type",
    "projects.filter.status": "Statut",
    "projects.filter.all": "Tous",
    "projects.empty": "Aucun projet ne correspond aux filtres sélectionnés.",
    "projects.writeupOnly": "Writeup uniquement",
    "projects.linksTbd": "Liens : à venir",
    "projects.noCover": "Pas encore de couverture",
    "projects.yearTbd": "À venir",

    "status.stable": "stable",
    "status.experimental": "expérimental",
    "status.archived": "archivé",

    "tag.game": "jeu",
    "tag.tool": "outil",
    "tag.cyber": "cyber",
    "tag.web": "web",
    "tag.backend": "backend",
    "tag.low-level": "bas niveau",
    "tag.industrial": "industriel",

    "contact.eyebrow": "Contact",
    "contact.heading": "Me contacter",
    "contact.intro": "[Placeholder — texte à confirmer]",
    "contact.email": "Email",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.email.value": "[email — à renseigner]",
    "contact.github.value": "[url GitHub — à renseigner]",
    "contact.linkedin.value": "[url LinkedIn — à renseigner]",

    "hostedAtHome.eyebrow": "HÉBERGÉ À LA MAISON",
    "hostedAtHome.heading": "Comment c'est hébergé",
    "hostedAtHome.intro": "[Placeholder — texte à confirmer]",
    "hostedAtHome.item.proxmox": "Proxmox",
    "hostedAtHome.item.opnsense": "OPNsense",
    "hostedAtHome.item.proxy": "Reverse proxy",
    "hostedAtHome.item.docker": "Docker",
    "hostedAtHome.item.tls": "TLS",
    "hostedAtHome.item.backups": "Sauvegardes 3-2-1",
    "hostedAtHome.detail": "[Placeholder — détails à confirmer]",

    "about.eyebrow": "À propos",
    "about.heading": "À propos",
    "about.body": "[Placeholder — texte à confirmer]",

    "footer.status": "Statut",
    "footer.graph": "Graphique",
    "footer.account": "Compte",

    "site.description":
      "[Placeholder — description du site à confirmer.]",
  },
} as const;
