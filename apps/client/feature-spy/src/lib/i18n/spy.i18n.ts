import { buildI18NResource } from '@nofun/util-translations';
import { SPY_NAMESPACE } from './constants';

interface SpyTranslations {
  game: {
    title: string;
    description: string;
  };
}

export const spyTranslations = buildI18NResource<SpyTranslations>({
  namespace: SPY_NAMESPACE,
  translations: {
    en: {
      game: {
        title: 'Spy',
        description: 'Spy is a game where you have to guess the word',
      },
    },
    es: {
      game: {
        title: 'Espía',
        description: 'Espía es un juego donde tienes que adivinar la palabra',
      },
    },
  },
});
