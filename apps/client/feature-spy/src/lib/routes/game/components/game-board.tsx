import {
  FlipCard,
  FlipCardBack,
  FlipCardFront,
  Icons,
} from '@nofun/ui-components';
import { HelpCircle } from 'lucide-react';
import { useState } from 'react';
import {
  GameSession,
  spyGameSessionAtom,
} from '../../../+state/game-session.state';
import { useAtom } from 'jotai';
import { categoriesConfig } from '../../../config/categories';
import { useTranslation } from 'react-i18next';
import { SPY_NAMESPACE } from '../../../i18n/constants';
import { cn } from '@nofun/tailwind-util-class-names';

function PlayerCardContent(props: {
  currentPlayer: string;
  gameSession: GameSession;
}) {
  const { currentPlayer, gameSession } = props;
  const { t } = useTranslation(SPY_NAMESPACE);
  if (currentPlayer === 'spy') {
    return (
      <>
        <Icons.Spy className="w-14 h-14 mb-4" />
        <span className="text-foreground text-lg">{t('Eres espía')}</span>
      </>
    );
  }

  if (!gameSession.category) {
    // TODO: Handle miss configuration of game session
    return;
  }

  const categoryConfig = categoriesConfig[gameSession.category];

  return (
    <>
      <categoryConfig.icon className="w-8 h-8 mb-4" />
      <h1 className="text-xl font-semibold">{gameSession.word}</h1>
    </>
  );
}

export function GameBoard() {
  const [gameSession] = useAtom(spyGameSessionAtom);
  const { t } = useTranslation(SPY_NAMESPACE);

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const currentPlayer = gameSession.players?.[currentPlayerIndex];

  const [cardFlipped, setCardFlipped] = useState(false);
  const [cardFlippable, setCardFlippable] = useState(true);

  function onGameCardFlip() {
    if (!cardFlipped) {
      setCurrentPlayerIndex(
        (index) => (index + 1) % (gameSession.players?.length ?? 1)
      );
    }
    setCardFlippable(true);
  }

  function onGameCardClick() {
    if (!cardFlippable) {
      return;
    }
    setCardFlipped((flipped) => !flipped);
    setCardFlippable(false);
  }

  return (
    <div className="flex flex-col justify-center items-center h-full flex-1">
      <span className="text-2xl">{`Jugador ${currentPlayerIndex + 1}`}</span>
      <FlipCard
        className="max-w-xs w-48 h-72 group my-6"
        onClick={onGameCardClick}
        onFlipEnd={onGameCardFlip}
        flipped={cardFlipped}
      >
        <FlipCardFront className="flex items-center justify-center">
          <HelpCircle className="w-24 h-24" />
        </FlipCardFront>
        <FlipCardBack>
          <div className="text-center flex flex-col items-center justify-center h-full text-foreground p-5">
            <PlayerCardContent
              currentPlayer={currentPlayer ?? ''}
              gameSession={gameSession}
            />
          </div>
        </FlipCardBack>
      </FlipCard>
      <span
        className={cn(
          'text-center px-10 opacity-0 transition-opacity duration-200 ease-in-out',
          {
            'opacity-100': cardFlipped && cardFlippable,
          }
        )}
      >
        {t('Toca para ocultar la tarjeta y pasa al siguiente jugador')}
      </span>
    </div>
  );
}
