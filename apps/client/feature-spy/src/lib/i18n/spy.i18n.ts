import { buildI18NResource } from '@nofun/util-translations';
import { SPY_NAMESPACE } from './constants';

interface SpyTranslations {
  game: {
    title: string;
    description: string;
  };
  setup: {
    help: {
      title: string;
      button: {
        next: string;
        prev: string;
        close: string;
      };
      step1: string;
      step2: string;
      step3: string;
      step4: string;
    };
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
      setup: {
        help: {
          title: 'How to play?',
          button: {
            next: 'Next',
            prev: 'Prev',
            close: 'Close',
          },
          step1:
            "Welcome to Spy! In this unique experience, everyone will share a word, but there is an imposter among you. The imposter doesn't know what the word is, but they must pretend and not allow themselves to be discovered. Can astute players identify the imposter before it's too late? Get ready for an adventure of words and deception!",
          step2:
            "Press the card with the ? to reveal whether you're one of the good guys or a spy. If a word appears, read it, memorize it (don't forget it!), press the card again, and pass the phone to the next player, continuing until everyone knows their role.",
          step3:
            'The time has come for each player to come up with a word related to the one they saw previously; clearly, the impostor will have to rely on their wit to say something that makes sense and go undetected.',
          step4:
            'Time to find out who the impostor is, ask questions with yes or no answers, and try to uncover the liar.',
        },
      },
    },
    es: {
      game: {
        title: 'Espía',
        description: 'Espía es un juego donde tienes que adivinar la palabra',
      },
      setup: {
        help: {
          title: '¿Cómo jugar?',
          button: {
            next: 'Siguiente',
            prev: 'Anterior',
            close: 'Cerrar',
          },
          step1:
            'Bienvenidos a Espía! En esta experiencia única, todos compartirán una palabra, pero hay un impostor entre ustedes. El impostor no sabe cuál es la palabra, pero debe disimular y descubrir la verdad a través de las pistas que los demás revelan al referirse a ella. ¿Podrán los jugadores astutos identificar al impostor antes de que sea demasiado tarde? ¡Prepárense para una aventura de palabras y engaños!',
          step2:
            'Presiona la tarjeta con el ? para revelar si eres de los buenos o un espía. Si te aparece una palabra, leela, memorízala (que no se te olvide!), vuelve a presionar la tarjeta y pasale el telefono al siguiente jugador y así hasta que cada uno sepa su rol.',
          step3:
            'Llegó el momento de que cada jugador de una palabra relacionada a la palabra que vieron anteriormente, claramente el impostor deberá depender de su ingenio para decir algo que tenga sentido y no ser detectado.',
          step4:
            'Hora de descubrir quien es el impostor, hagan preguntas cuyas respuestas sean si o no y traten de descubrir quién miente.',
        },
      },
    },
  },
});
