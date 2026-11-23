import { en, type Dictionary } from './dictionaries/en';
import { fr } from './dictionaries/fr';
import { ru } from './dictionaries/ru';
import type { Locale } from './config';

export * from './config';
export * from './routes';
export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { en, fr, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
