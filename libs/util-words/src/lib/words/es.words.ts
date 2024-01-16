import { WordCategory } from '../models/word-category.model';
import { WordsDictionary } from '../models/words-dictionary.model';
import { spanishAnimals } from './es/animals';
import { spanishBeauty } from './es/beatuy';
import { spanishColors } from './es/colors';
import { spanishCountries } from './es/countries';
import { spanishKitchen } from './es/kitchen';
import { spanishMoviesAndSeries } from './es/movies-and-series';
import { spanishNature } from './es/nature';
import { spanishObjects } from './es/objects';
import { spanishPublicPlaces } from './es/public-places';
import { spanishSports } from './es/sports';
import { spanishTransportation } from './es/transportation';

export const spanishWords: WordsDictionary = {
  [WordCategory.Countries]: spanishCountries,
  [WordCategory.Objects]: spanishObjects,
  [WordCategory.Sports]: spanishSports,
  [WordCategory.Colors]: spanishColors,
  [WordCategory.Transportation]: spanishTransportation,
  [WordCategory.PublicPlaces]: spanishPublicPlaces,
  [WordCategory.Nature]: spanishNature,
  [WordCategory.Kitchen]: spanishKitchen,
  [WordCategory.Beauty]: spanishBeauty,
  [WordCategory.Animals]: spanishAnimals,
  [WordCategory.MoviesAndSeries]: spanishMoviesAndSeries,
};
