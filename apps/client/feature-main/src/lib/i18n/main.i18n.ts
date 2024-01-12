import { buildI18NResource } from '@nofun/util-translations';
import { MAIN_NAMESPACE } from './constants';

interface MainTranslations {
  title: string;
  description: string;
}

export const mainTranslations = buildI18NResource<MainTranslations>({
  namespace: MAIN_NAMESPACE,
  translations: {
    en: {
      title: 'Nofun Games',
      description: 'Choose a game to start the fun!',
    },
    es: {
      title: 'Juegos Nofun',
      description: 'Escoge un juego para que comience la diversión!',
    },
  },
});
