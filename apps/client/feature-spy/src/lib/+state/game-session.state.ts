import { WordCategory } from '@nofun/util-words';
import { atomWithImmer } from 'jotai-immer';

export enum GameStage {
  Setup = 'setup',
  WordReveal = 'word-reveal',
  Timer = 'timer',
}

export interface GameSession {
  gameStage: GameStage;
  word: string;
  category: WordCategory;
  players: Array<string>;
}

const defaultGameSession: GameSession = {
  gameStage: GameStage.Setup,
  word: undefined as unknown as string,
  category: undefined as unknown as WordCategory,
  players: undefined as unknown as Array<string>,
};

const spyGameSessionAtom = atomWithImmer(defaultGameSession);
spyGameSessionAtom.debugLabel = 'spyGameSessionAtom';

export { spyGameSessionAtom };
