import { defaultLocale, type Locale } from './config';

/**
 * Site map. Slugs are shared across languages so the language switcher can
 * always land on the same page (and the same #anchor) in another language.
 * Only `home` is built at this stage; the others are linked to in advance.
 */
export const routes = {
  home: '',
  services: 'services',
  about: 'about',
  contact: 'contact',
} as const;

export type RouteKey = keyof typeof routes;

/** Homepage sections reachable from the navigation. */
export const sections = {
  services: 'services',
  about: 'about',
  contact: 'contact',
} as const;
export type SectionKey = keyof typeof sections;

export function sectionHref(locale: Locale, key: SectionKey): string {
  return `/${locale}/#${sections[key]}`;
}

/** Service category anchors (ids of the accordion rows). */
export const serviceAnchors = {
  maintenance: 'maintenance',
  repairs: 'repairs-furnishings-renovations',
  previsit: 'pre-visit-arrangements',
  accounting: 'accounting-and-other',
} as const;

export type ServiceKey = keyof typeof serviceAnchors;

export function localizedPath(locale: Locale, route: RouteKey = 'home', hash?: string): string {
  const slug = routes[route];
  const path = `/${locale}/${slug ? `${slug}/` : ''}`;
  return hash ? `${path}#${hash}` : path;
}

/** Swap the locale prefix of a path, keeping the rest of it. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return `/${target}/`;
  parts[0] = target;
  return `/${parts.join('/')}/`;
}

export { defaultLocale };
