import { atom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';
import { produce } from 'immer';

export enum GroupingMode {
  Couples = 'couples',
  Groups = 'groups',
}

export enum PlayersSelection {
  Random = 'random',
  Manual = 'manual',
}

export enum WordsMode {
  Generated = 'generated',
  Custom = 'custom',
}

export type GameGroup = {
  id: string;
  name: string;
  players: Array<string>;
};

export enum GameRound {
  Description = 'description',
  Mimics = 'mimics',
  OneWord = 'oneWord',
}

export type GameRoundData = {
  guessedWords: {
    [player: string]: Array<string>;
  };
};

export interface GameSession {
  players: Array<string>;
  grouping: {
    mode: GroupingMode;
    groupSize: number;
    playersSelection: PlayersSelection;
  };
  words: {
    mode: WordsMode;
    amountPerPlayer: number;
    custom: {
      [player: string]: Array<string>;
    };
    list: Array<string>;
  };
  groups: Array<GameGroup>;
  rounds: {
    [key in GameRound]: GameRoundData;
  };
}

const gameSessionAtom = atomWithImmer<GameSession>({
  players: [],
  grouping: {
    mode: GroupingMode.Couples,
    groupSize: 2,
    playersSelection: PlayersSelection.Random,
  },
  words: {
    mode: WordsMode.Custom,
    amountPerPlayer: 3,
    custom: {},
    list: [],
  },
  groups: [],
  rounds: {
    description: {
      guessedWords: {},
    },
    mimics: {
      guessedWords: {},
    },
    oneWord: {
      guessedWords: {},
    },
  },
});
gameSessionAtom.debugLabel = 'gameSessionAtom';

const playerGuessRoundWordAtom = atom(
  null,
  (
    get,
    set,
    options: { round: GameRound; player: string; guessedWord: string }
  ) => {
    set(
      gameSessionAtom,
      produce((gameSession: GameSession) => {
        const { round, player, guessedWord } = options;
        const roundData = gameSession.rounds[round];
        if (!roundData) {
          throw new Error(`Invalid round: ${round}`);
        }

        if (!roundData.guessedWords[player]) {
          roundData.guessedWords[player] = [];
        }

        roundData.guessedWords[player].push(guessedWord);
      })
    );
  }
);

export { gameSessionAtom, playerGuessRoundWordAtom };
