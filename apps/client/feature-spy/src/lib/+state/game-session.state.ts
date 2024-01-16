import { WordCategory } from '@nofun/util-words';
import { atomWithImmer } from 'jotai-immer';

export interface GameSession {
  word: string | undefined;
  category: WordCategory | undefined;
  players: Array<string> | undefined;
}

const defaultGameSession: GameSession = {
  word: undefined,
  category: undefined,
  players: undefined,
};

const spyGameSessionAtom = atomWithImmer(defaultGameSession);
spyGameSessionAtom.debugLabel = 'spyGameSessionAtom';

export { spyGameSessionAtom };
