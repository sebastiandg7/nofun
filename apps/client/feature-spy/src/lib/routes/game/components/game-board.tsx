import {
  FlipCard,
  FlipCardBack,
  FlipCardFront,
  Icons,
} from '@nofun/ui-components';
import { HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { GameSession } from '../../../+state/game-session.state';

function PlayerCardContent(props: {
  currentPlayer: string;
  gameSession: GameSession;
}) {
  const { currentPlayer, gameSession } = props;
  if (currentPlayer === 'spy') {
    return (
      <>
        <Icons.Spy className="w-14 h-14 mb-4" />
        <span className="text-foreground text-lg">Spy</span>
      </>
    );
  }

  return (
    <>
      <span className="mb-4">{gameSession.category}</span>
      <h1 className="text-xl font-semibold">{gameSession.word}</h1>
    </>
  );
}
export interface GameBoardProps {
  gameSession: GameSession;
}

export function GameBoard(props: GameBoardProps) {
  const { gameSession } = props;

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const currentPlayer = gameSession.players?.[currentPlayerIndex];

  function onGameCardFlip() {
    if (!cardFlipped) {
      setCurrentPlayerIndex(
        (index) => (index + 1) % (gameSession.players?.length ?? 1)
      );
    }
  }

  function onGameCardClick() {
    setCardFlipped((flipped) => !flipped);
  }

  const [cardFlipped, setCardFlipped] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center h-full flex-1">
      <span>{`Jugador ${currentPlayerIndex + 1}`}</span>
      <FlipCard
        className="max-w-xs w-56 h-72 group my-6"
        onClick={onGameCardClick}
        onFlipEnd={onGameCardFlip}
        flipped={cardFlipped}
      >
        <FlipCardFront className="flex items-center justify-center">
          <HelpCircle className="w-24 h-24" />
        </FlipCardFront>
        <FlipCardBack>
          <div className="text-center flex flex-col items-center justify-center h-full text-foreground p-10">
            {/* <span className="mb-4">{gameSession.category}</span>
            <h1 className="text-xl font-semibold">{gameSession.word}</h1>
            <Button className="rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125 transition-all">
              Watch Now
            </Button> */}
            <PlayerCardContent
              currentPlayer={currentPlayer ?? ''}
              gameSession={gameSession}
            />
          </div>
        </FlipCardBack>
      </FlipCard>
      <span>{'Hello'}</span>
    </div>
  );
}
