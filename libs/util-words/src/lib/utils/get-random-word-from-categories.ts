import { GameWord } from '../models/game-word.model';
import { WordCategory } from '../models/word-category.model';
import { WordsDictionary } from '../models/words-dictionary.model';
import { englishWords } from '../words/en.words';
import { spanishWords } from '../words/es.words';

export function getRandomWordFromCategories(
  language: string,
  categories: Array<WordCategory>
): GameWord {
  let wordsDictionary: WordsDictionary | undefined;

  if (language === 'es') {
    wordsDictionary = spanishWords;
  }

  if (language === 'en') {
    wordsDictionary = englishWords;
  }

  if (wordsDictionary) {
    const possibleCategories =
      categories.length > 0
        ? Object.keys(wordsDictionary).filter((category) =>
            categories.includes(category as WordCategory)
          )
        : Object.keys(wordsDictionary);
    const randomCategoryIndex = Math.floor(
      Math.random() * possibleCategories.length
    );
    const randomCategory = possibleCategories[randomCategoryIndex];
    const words = wordsDictionary[randomCategory as WordCategory];
    const randomWordIndex = Math.floor(Math.random() * words.length);

    return {
      word: words[randomWordIndex],
      category: randomCategory as WordCategory,
    };
  }

  throw Error(`Language ${language} not supported`);
}
