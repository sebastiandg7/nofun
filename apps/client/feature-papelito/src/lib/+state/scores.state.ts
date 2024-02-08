import { atom } from 'jotai';
import {
  GameGroup,
  GameRound,
  GameRoundData,
  gameSessionAtom,
} from './game-session.state';

type GroupScore = GameGroup & {
  score: number;
};

function calculateGroupRoundScore(group: GameGroup, round: GameRoundData) {
  return group.players.reduce((acc, player) => {
    const guessedWords = round.guessedWords[player];
    return acc + guessedWords.length;
  }, 0);
}

const leaderboardAtom = atom((get) => {
  const session = get(gameSessionAtom);
  const rounds = Object.entries(session.rounds);

  const groupScores: Array<GroupScore> = session.groups.map((group) => {
    let score = 0;
    rounds.forEach(([roundName, round]) => {
      score += calculateGroupRoundScore(group, round);
    });

    return { ...group, score };
  });

  return groupScores.sort((a, b) => b.score - a.score);
});

function createRoundScoresAtom(options: { round: GameRound }) {
  return atom<Array<GroupScore>>((get) => {
    const gameSession = get(gameSessionAtom);
    const round = gameSession.rounds[options.round];

    return gameSession.groups.map((group) => {
      return {
        ...group,
        score: calculateGroupRoundScore(group, round),
      };
    });
  });
}

export { leaderboardAtom, createRoundScoresAtom };