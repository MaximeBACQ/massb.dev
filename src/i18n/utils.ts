import { ui, defaultLang } from "./ui";

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split("/");
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

// Strips a leading locale prefix (any locale other than the default, which
// is never prefixed — see astro.config.mjs `prefixDefaultLocale: false`) so
// a switcher link can be rebuilt for a different locale from the current path.
const prefixedLocales = (Object.keys(ui) as Lang[]).filter(
  (l) => l !== defaultLang,
);

export function pathWithoutLocale(pathname: string): string {
  for (const locale of prefixedLocales) {
    const re = new RegExp(`^/${locale}(/|$)`);
    if (re.test(pathname)) {
      const stripped = pathname.replace(re, "/");
      return stripped === "" ? "/" : stripped;
    }
  }
  return pathname === "" ? "/" : pathname;
}
