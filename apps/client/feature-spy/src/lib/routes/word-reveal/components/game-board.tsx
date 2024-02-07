import {
  Button,
  FlipCard,
  FlipCardBack,
  FlipCardFront,
  Icons,
} from '@nofun/ui-components';
import { ArrowBigLeftDash, HelpCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  GameSession,
  GameStage,
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
        <span className="text-foreground text-lg">{t('board.spy_player')}</span>
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
  const [gameSession, setGameSession] = useAtom(spyGameSessionAtom);
  const { t } = useTranslation(SPY_NAMESPACE);

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const currentPlayer = gameSession.players?.[currentPlayerIndex];

  const [cardFlipped, setCardFlipped] = useState(false);
  const [cardFlippable, setCardFlippable] = useState(true);

  useEffect(() => {
    if (gameSession.players && gameSession.players.length > 0) {
      return;
    }

    if (gameSession.gameStage === GameStage.WordReveal) {
      return;
    }

    if (gameSession.category) {
      return;
    }

    if (gameSession.word && gameSession.word !== '') {
      return;
    }

    setGameSession((_gameSession) => {
      _gameSession.gameStage = GameStage.Setup;
      return _gameSession;
    });
  }, [gameSession]);

  function onGameCardFlip() {
    if (!cardFlipped) {
      if (currentPlayerIndex === gameSession.players.length - 1) {
        setGameSession((_gameSession) => {
          _gameSession.gameStage = GameStage.Timer;
          return _gameSession;
        });
        return;
      }
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

  function onReturnToSetupClick() {
    setGameSession((_gameSession) => {
      _gameSession.gameStage = GameStage.Setup;
      return _gameSession;
    });
  }

  return (
    <div className="flex flex-col justify-center items-center h-full flex-1 relative">
      <Button size="icon"
          variant="secondary" className='absolute top-4 left-4' onClick={onReturnToSetupClick}>
        <ArrowBigLeftDash className='w-16' />
      </Button>
      <span className="text-2xl">{`${t('board.player')} ${currentPlayerIndex + 1}`}</span>
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
        {t('board.card_hide')}
      </span>
    </div>
  );
}
