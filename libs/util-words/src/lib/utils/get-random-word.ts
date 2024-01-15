import { GameWord } from '../models/game-word.model';
import { getRandomWordFromCategories } from './get-random-word-from-categories';

export function getRandomWord(langauge: string): GameWord {
  return getRandomWordFromCategories(langauge, []);
}
