/**
 * Locale registry. Add a language here, add its dictionary in ./dictionaries,
 * and every page, the switcher and the hreflang tags pick it up.
 */
export const locales = ['en', 'fr', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeMeta: Record<
  Locale,
  {
    /** Short code shown in the switcher (no flags, by design). */
    short: string;
    /** Language's own name, used in the mobile menu and for screen readers. */
    native: string;
    /** BCP 47 tag for <html lang> and hreflang. */
    htmlLang: string;
    /** Open Graph locale. */
    ogLocale: string;
    /**
     * Translation status. Draft locales show a discreet notice until a native
     * speaker has reviewed the copy (set to 'approved' after review).
     */
    status: 'approved' | 'draft';
  }
> = {
  en: { short: 'EN', native: 'English', htmlLang: 'en', ogLocale: 'en_GB', status: 'approved' },
  fr: { short: 'FR', native: 'Français', htmlLang: 'fr', ogLocale: 'fr_FR', status: 'approved' },
  ru: { short: 'RU', native: 'Русский', htmlLang: 'ru', ogLocale: 'ru_RU', status: 'approved' },
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
