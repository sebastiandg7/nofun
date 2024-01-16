import { WordCategory } from '../models/word-category.model';
import { WordsDictionary } from '../models/words-dictionary.model';
import { englishAnimals } from './en/animals';
import { englishBeauty } from './en/beauty';
import { englishColors } from './en/colors';
import { englishCountries } from './en/countries';
import { englishKitchen } from './en/kitchen';
import { englishMoviesAndSeries } from './en/movies-and-series';
import { englishNature } from './en/nature';
import { englishObjects } from './en/objects';
import { englishPublicPlaces } from './en/public-places';
import { englishSports } from './en/sports';
import { englishTransportation } from './en/transportation';

export const englishWords: WordsDictionary = {
  [WordCategory.Countries]: englishCountries,
  [WordCategory.Objects]: englishObjects,
  [WordCategory.Sports]: englishSports,
  [WordCategory.Colors]: englishColors,
  [WordCategory.Transportation]: englishTransportation,
  [WordCategory.PublicPlaces]: englishPublicPlaces,
  [WordCategory.Nature]: englishNature,
  [WordCategory.Kitchen]: englishKitchen,
  [WordCategory.Beauty]: englishBeauty,
  [WordCategory.Animals]: englishAnimals,
  [WordCategory.MoviesAndSeries]: englishMoviesAndSeries,
};
