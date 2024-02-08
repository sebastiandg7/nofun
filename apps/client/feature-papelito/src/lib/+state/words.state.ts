import { atom } from 'jotai';
import { GameRound, WordsMode, gameSessionAtom } from './game-session.state';

export const gameWordsAtom = atom((get) => {
  const gameSession = get(gameSessionAtom);
  if (gameSession.words.mode === WordsMode.Custom) {
    return Object.values(gameSession.words.custom).flat();
  }

  return gameSession.words.list;
});

export function createRoundRemainingWordsAtom(options: { round: GameRound }) {
  return atom((get) => {
    const gameSession = get(gameSessionAtom);
    const round = gameSession.rounds[options.round];
    const guessedWords = Object.values(round.guessedWords).flat();

    return get(gameWordsAtom).filter((word) => !guessedWords.includes(word));
  });
}
