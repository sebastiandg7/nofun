import { mainTranslations } from '@nofun/client-feature-main';
import { spyTranslations } from '@nofun/client-feature-spy';
import type { ResourceKey } from 'i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const supportedLanguages = ['en', 'es'];
const namespacesTranslations = [spyTranslations, mainTranslations];

const resources = supportedLanguages.reduce<{
  [lang: string]: { [namespace: string]: ResourceKey };
}>((acc, lang) => {
  return {
    ...acc,
    [lang]: {
      ...namespacesTranslations.reduce<{
        [namespace: string]: ResourceKey;
      }>((acc, namespaceTranslation) => {
        return {
          ...acc,
          [namespaceTranslation.namespace]:
            namespaceTranslation.langTranslations[lang],
        };
      }, {}),
    },
  };
}, {});

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export { i18n };
