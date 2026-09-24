// Site copy, per locale. English is the confirmed source (see CLAUDE.md); the
// French column is a first-pass translation done at the owner's request,
// wording is expected to be reviewed/adjusted by the owner, not final.

export const languages = {
  en: "EN",
  fr: "FR",
} as const;

export const defaultLang = "fr";

export const ui = {
  en: {
    "nav.projects": "Projects",
    "nav.github": "GitHub",
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
      "Games, apps and security tools, the things I like building.",
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
    "twoLanes.infra.item.4": "Docker-hosted services, this site included",

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
    "projects.pcOnly": "PC only",
    "projects.noCover": "No cover yet",
    "projects.yearTbd": "TBD",

    "writeup.back": "All projects",
    "writeup.demoCaption": "Demo, recorded locally",

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
    "contact.intro":
      "Leave a message here and it lands straight in my inbox.",
    "contact.linkedin": "LinkedIn",
    "contact.privacy":
      "No captcha, no tracking. Spam gets filtered on my own server, and your email is only used to reply to you.",
    "contact.form.name": "Your name",
    "contact.form.email": "Your email",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "What's on your mind?",
    "contact.form.send": "Send message",
    "contact.form.sending": "Sending…",
    "contact.form.honeypot": "Leave this field empty",
    "contact.form.sent.heading": "Message sent",
    "contact.form.sent.body": "Thanks! I'll get back to you at",
    "contact.form.sent.again": "Write another one",
    "contact.error.name": "Enter your name (100 characters max).",
    "contact.error.email": "Enter a valid email address so I can reply.",
    "contact.error.message.length": "Write at least 10 characters (5000 max).",
    "contact.error.message.links": "Too many links, keep it to 3 or fewer.",
    "contact.error.too-fast": "That was quick! Wait a few seconds and send again.",
    "contact.error.expired": "This page has been open a while. Send again to refresh it.",
    "contact.error.rate-limited":
      "Too many messages from your connection. Try again in a few minutes.",
    "contact.error.generic":
      "The message couldn't be sent. Try again in a minute.",

    "hostedAtHome.eyebrow": "HOSTED AT HOME",
    "hostedAtHome.heading": "How it's hosted",
    "hostedAtHome.intro":
      "Everything on this page is served from my own hardware at home, no cloud host, no third-party platform. Here's the stack that keeps it running.",
    "hostedAtHome.item.proxmox": "Proxmox",
    "hostedAtHome.detail.proxmox":
      "The hypervisor everything runs on, each service lives in its own isolated VM or container.",
    "hostedAtHome.item.opnsense": "OPNsense",
    "hostedAtHome.detail.opnsense":
      "Firewall and router at the edge, segments the network and controls what's allowed in from outside.",
    "hostedAtHome.item.proxy": "Reverse proxy",
    "hostedAtHome.detail.proxy":
      "Sits in front of every service, terminates TLS and routes each hostname to the right container, this site included.",
    "hostedAtHome.item.docker": "Docker",
    "hostedAtHome.detail.docker":
      "Services ship as containers with docker-compose, so any of them can be rebuilt and redeployed from source.",
    "hostedAtHome.item.tls": "TLS",
    "hostedAtHome.detail.tls":
      "HTTPS everywhere, with certificates issued and renewed automatically.",


    "site.description":
      "Apps, security tools and games I build, all self-hosted on my own homelab. The personal workshop and portfolio of massb.",
  },
  fr: {
    "nav.projects": "Projets",
    "nav.github": "GitHub",
    "nav.contact": "Contact",

    "hero.eyebrow": "ATELIER AUTO-HÉBERGÉ",
    "hero.headline":
      "Je construis des applis, des outils de sécurité, des jeux, ou tout ce qui me semble\namusant ou utile.",
    "hero.headlineHighlight": "amusant ou utile",
    // "hero.tagline": "Tout ce qui est ici tourne sur mon homelab personnel.",
    "hero.selfHostLine": "Auto-hébergé sur mon propre homelab.",
    "hero.cta.primary": "Voir les projets",
    "hero.cta.secondary": "Comment c'est hébergé",

    "twoLanes.security": "Sécurisé par conception",
    "twoLanes.dev.eyebrow": "Développement",
    "twoLanes.dev.heading": "Ce que je construis",
    "twoLanes.dev.intro":
      "Des outils de sécurité, des applis, des jeux : ce que j'aime construire.",
    "twoLanes.dev.item.1": "Jeux Unity & web",
    "twoLanes.dev.item.2": "Applis full-stack",
    "twoLanes.dev.item.3": "PoC de sécurité & writeups",
    "twoLanes.dev.item.4": "Bas niveau / assembleur",
    "twoLanes.infra.eyebrow": "Infrastructure & auto-hébergement",
    "twoLanes.infra.heading": "Comment ça tourne",
    "twoLanes.infra.intro":
      "Le homelab qui fait tout tourner ici, y compris ce site.",
    "twoLanes.infra.item.1": "Virtualisation Proxmox",
    "twoLanes.infra.item.2": "Pare-feu & routage OPNsense",
    "twoLanes.infra.item.3": "Reverse proxy + TLS",
    "twoLanes.infra.item.4": "Services hébergés sous Docker, ce site inclus",

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
    "projects.pcOnly": "PC seulement",
    "projects.noCover": "Pas encore de couverture",
    "projects.yearTbd": "À venir",

    "writeup.back": "Tous les projets",
    "writeup.demoCaption": "Démo, enregistrée en local",

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
    "contact.intro":
      "Laissez un message ici, il arrive directement dans ma boîte mail.",
    "contact.linkedin": "LinkedIn",
    "contact.privacy":
      "Pas de captcha, pas de pistage. Le spam est filtré sur mon propre serveur, et votre email ne sert qu'à vous répondre.",
    "contact.form.name": "Votre nom",
    "contact.form.email": "Votre email",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Qu'avez-vous en tête ?",
    "contact.form.send": "Envoyer le message",
    "contact.form.sending": "Envoi…",
    "contact.form.honeypot": "Laissez ce champ vide",
    "contact.form.sent.heading": "Message envoyé",
    "contact.form.sent.body": "Merci ! Je vous réponds à",
    "contact.form.sent.again": "Écrire un autre message",
    "contact.error.name": "Indiquez votre nom (100 caractères max).",
    "contact.error.email": "Indiquez une adresse email valide pour que je puisse répondre.",
    "contact.error.message.length": "Écrivez au moins 10 caractères (5000 max).",
    "contact.error.message.links": "Trop de liens, 3 maximum.",
    "contact.error.too-fast": "C'était rapide ! Attendez quelques secondes et renvoyez.",
    "contact.error.expired": "Cette page est ouverte depuis longtemps. Renvoyez pour la rafraîchir.",
    "contact.error.rate-limited":
      "Trop de messages depuis votre connexion. Réessayez dans quelques minutes.",
    "contact.error.generic":
      "Le message n'a pas pu être envoyé. Réessayez dans une minute.",

    "hostedAtHome.eyebrow": "HÉBERGÉ SUR MON INFRASTRUCTURE",
    "hostedAtHome.heading": "Comment c'est hébergé",
    "hostedAtHome.intro":
      "Tout ce que vous voyez ici est servi depuis mon propre matériel, à la maison, pas d'hébergeur cloud, pas de plateforme tierce. Voici la stack qui fait tourner l'ensemble.",
    "hostedAtHome.item.proxmox": "Proxmox",
    "hostedAtHome.detail.proxmox":
      "L'hyperviseur qui fait tout tourner, chaque service vit dans sa propre VM ou son propre conteneur isolé.",
    "hostedAtHome.item.opnsense": "OPNsense",
    "hostedAtHome.detail.opnsense":
      "Pare-feu et routeur en périphérie, segmente le réseau et contrôle ce qui entre depuis l'extérieur.",
    "hostedAtHome.item.proxy": "Reverse proxy",
    "hostedAtHome.detail.proxy":
      "Placé devant chaque service, il termine le TLS et route chaque nom d'hôte vers le bon conteneur, ce site compris.",
    "hostedAtHome.item.docker": "Docker",
    "hostedAtHome.detail.docker":
      "Les services sont livrés en conteneurs avec docker-compose : chacun peut être reconstruit et redéployé depuis les sources.",
    "hostedAtHome.item.tls": "TLS",
    "hostedAtHome.detail.tls":
      "HTTPS partout, avec des certificats émis et renouvelés automatiquement.",


    "site.description":
      "Des applis, des outils de sécurité et des jeux que je construis, le tout auto-hébergé sur mon propre homelab. L'atelier et portfolio personnel de massb.",
  },
} as const;
