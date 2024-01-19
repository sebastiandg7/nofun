import { cn } from '@nofun/tailwind-util-class-names';
import { WordCategory } from '@nofun/util-words';
import {
  Box,
  Bus,
  Cat,
  ChefHat,
  Dumbbell,
  Flag,
  Landmark,
  Palette,
  Popcorn,
  Smile,
  Trees,
} from 'lucide-react';

type CategoryConfig = {
  [key in WordCategory]: {
    icon: React.FC<{ className?: string }>;
    label: string;
  };
};

export const categoriesConfig: CategoryConfig = {
  [WordCategory.Animals]: {
    icon: ({ className, ...props }) => (
      <Cat className={cn('h-4 w-4', className)} {...props} />
    ),
    label: 'animals',
  },
  [WordCategory.Beauty]: {
    icon: ({ className, ...props }) => (
      <Smile className={cn('h-4 w-4', className)} {...props} />
    ),
    label: 'beauty',
  },
  [WordCategory.Colors]: {
    icon: ({ className, ...props }) => (
      <Palette className={cn('h-4 w-4', className)} {...props} />
    ),
    label: 'colors',
  },
  [WordCategory.Countries]: {
    icon: ({ className, ...props }) => (
      <Flag className={cn('h-4 w-4', className)} {...props} />
    ),
    label: 'countries',
  },
  [WordCategory.Kitchen]: {
    icon: ({ className, ...props }) => (
      <ChefHat className={cn('h-4 w-4', className)} {...props} />
    ),
    label: 'kitchen',
  },
  [WordCategory.MoviesAndSeries]: {
    icon: ({ className, ...props }) => (
      <Popcorn className={cn('h-4 w-4', className)} {...props} />
    ),
    label: 'movies and series',
  },
  [WordCategory.Nature]: {
    icon: ({ className, ...props }) => (
      <Trees className={cn('h-4 w-4', className)} {...props} />
    ),
    label: 'nature',
  },
  [WordCategory.Objects]: {
    icon: ({ className, ...props }) => (
      <Box className={cn('h-4 w-4', className)} {...props} />
    ),
    label: 'objects',
  },
  [WordCategory.PublicPlaces]: {
    icon: ({ className, ...props }) => (
      <Landmark className={cn('h-4 w-4', className)} {...props} />
    ),
    label: 'public places',
  },
  [WordCategory.Sports]: {
    icon: ({ className, ...props }) => (
      <Dumbbell className={cn('h-4 w-4', className)} {...props} />
    ),
    label: 'sports',
  },
  [WordCategory.Transportation]: {
    icon: ({ className, ...props }) => (
      <Bus className={cn('h-4 w-4', className)} {...props} />
    ),
    label: 'transportation',
  },
};
