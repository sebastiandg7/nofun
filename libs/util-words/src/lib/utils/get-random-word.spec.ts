import { WordCategory } from '../models/word-category.model';
import { englishWords } from '../words/en.words';
import { getRandomWord } from './get-random-word';

describe('getRandomWord', () => {
  it('should return a random word from the dictionary', () => {
    const word = getRandomWord('en');
    expect(word).toBeDefined();
    // expect word to be in the english dictionary
    expect(
      Object.keys(englishWords).find((category) => {
        if (englishWords[category as WordCategory].includes(word.word)) {
          return true;
        }

        return false;
      })
    ).toBeTruthy();
  });

  it('should throw an error if language is not supported', () => {
    expect(() => getRandomWord('fr')).toThrowError();
  });
});
