import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import af from './locales/af.json';
import de from './locales/de.json';
import pt from './locales/pt.json';

export const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'af', label: 'Afrikaans', flag: '🇿🇦' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
] as const;

export type LangCode = (typeof LANGUAGES)[number]['code'];

const saved = typeof localStorage !== 'undefined'
  ? (localStorage.getItem('bi_lang') as LangCode | null)
  : null;

i18n
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, af: { translation: af }, de: { translation: de }, pt: { translation: pt } },
    lng: saved ?? 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('bi_lang', lng);
  document.documentElement.lang = lng;
});

export default i18n;
