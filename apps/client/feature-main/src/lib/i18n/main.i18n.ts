import { buildI18NResource } from '@nofun/util-translations';
import { MAIN_NAMESPACE } from './constants';

interface MainTranslations {
  title: string;
  description: string;
  share: { label: string; title: string; text: string };
  games: {
    spy: {
      title: string;
      description: string;
    };
    papelito: {
      title: string;
      description: string;
    };
    dice: {
      title: string;
      description: string;
    };
  };
}

export const mainTranslations = buildI18NResource<MainTranslations>({
  namespace: MAIN_NAMESPACE,
  translations: {
    en: {
      title: 'Nofun Games',
      description: 'Choose a game to start the fun!',
      share: {
        label: 'Share with friends',
        title: 'Share',
        text: 'Join me in Nofun Games!',
      },
      games: {
        spy: {
          title: 'Spy',
          description: "Discover the impostor before it's too late.",
        },
        papelito: {
          title: 'Papelito',
          description: 'Make your team guess as many words as possible.',
        },
        dice: {
          title: 'Dice',
          description: 'Roll the dice and take your chances.',
        },
      },
    },
    es: {
      title: 'Juegos Nofun',
      description: 'Escoge un juego para que comience la diversión!',
      share: {
        label: 'Compartir con amigos',
        title: 'Compartir',
        text: '¡Juguemos juntos en Nofun Games!',
      },
      games: {
        spy: {
          title: 'Espía',
          description: 'Descubre al impostor antes de que sea demasiado tarde.',
        },
        papelito: {
          title: 'Papelito',
          description:
            'Haz que tu equipo adivine tantas palabras como sea posible.',
        },
        dice: {
          title: 'Dados',
          description: 'Tira los dados y toma tus oportunidades.',
        },
      },
    },
  },
});
