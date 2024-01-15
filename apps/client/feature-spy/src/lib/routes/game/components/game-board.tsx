import { GameSession } from '../../../+state/game-session.state';

export interface GameBoardProps {
  gameSession: GameSession;
}

export function GameBoard(props: GameBoardProps) {
  return (
    <div>
      <h1>Welcome to GameBoard!</h1>
      <code>{JSON.stringify(props.gameSession)}</code>
    </div>
  );
}
