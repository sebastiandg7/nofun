import { WordCategory } from './word-category.model';

export type WordsDictionary = {
  [key in WordCategory]: Array<string>;
};
