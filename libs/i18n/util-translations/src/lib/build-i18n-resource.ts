type TranslationsMap = object;

export type LangTranslations = {
  [lang: string]: TranslationsMap;
};

export type Translations<T extends TranslationsMap> = {
  [language: string]: T;
};

export function buildLangTranslations<T extends TranslationsMap>(options: {
  translations: Translations<T>;
}): LangTranslations {
  const { translations } = options;
  return Object.keys(translations).reduce<LangTranslations>(
    (currentResources, language) => {
      return {
        ...currentResources,
        [language]: translations[language],
      };
    },
    {}
  );
}

export function buildI18NResource<T extends TranslationsMap>(options: {
  namespace: string;
  translations: Translations<T>;
}) {
  const { namespace, translations } = options;
  return {
    namespace,
    langTranslations: buildLangTranslations<T>({ translations }),
  };
}
