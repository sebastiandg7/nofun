import { WordCategory } from '../models/word-category.model';
import { spanishAnimals } from '../words/es/animals';
import { getRandomWordFromCategories } from './get-random-word-from-categories';

describe('getRandomWordFromCategories', () => {
  it('should return a random word from the given categories', () => {
    const word = getRandomWordFromCategories('es', [WordCategory.Animals]);
    expect(word).toBeDefined();
    expect(spanishAnimals.includes(word.word)).toBeTruthy();
    expect(word.category).toEqual(WordCategory.Animals);
  });
});
