import {
  Button,
  FlipCard,
  FlipCardBack,
  FlipCardFront,
} from '@nofun/ui-components';
import { useState } from 'react';
import { GameSession } from '../../../+state/game-session.state';

export interface GameBoardProps {
  gameSession: GameSession;
}

export function GameBoard(props: GameBoardProps) {
  const [cardFlipped, setCardFlipped] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center h-full flex-1">
      <FlipCard
        className="w-60 h-72 group"
        onClick={() => setCardFlipped((flipped) => !flipped)}
        flipped={cardFlipped}
      >
        <FlipCardFront>
          <h1 className="text-3xl font-semibold">The King's Man</h1>
        </FlipCardFront>
        <FlipCardBack>
          <div className="text-center flex flex-col items-center justify-center h-full text-foreground px-2 pb-24">
            <h1 className="text-3xl font-semibold">The King's Man</h1>
            <p className="my-2">9.0 Rating</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <Button className="rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125 transition-all">
              Watch Now
            </Button>
          </div>
        </FlipCardBack>
      </FlipCard>
    </div>
  );
}
