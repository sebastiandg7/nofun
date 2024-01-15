import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Label,
  Switch,
  Toggle,
} from '@nofun/ui-components';
import { WordCategory } from '@nofun/util-words';
import { useAtom } from 'jotai';
import {
  Box,
  Bus,
  Cat,
  CheckCircle,
  ChefHat,
  Dumbbell,
  Flag,
  Landmark,
  NotebookPen,
  Palette,
  Popcorn,
  Smile,
  Trees,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { spyGameSettingsAtom } from '../../../+state/game-settings.state';
import { SPY_NAMESPACE } from '../../../i18n/constants';

const categories: Array<{ category: WordCategory; icon: React.ReactNode }> = [
  {
    category: WordCategory.Animals,
    icon: <Cat className="h-4 w-4" />,
  },
  {
    category: WordCategory.Colors,
    icon: <Palette className="h-4 w-4" />,
  },
  {
    category: WordCategory.Sports,
    icon: <Dumbbell className="h-4 w-4" />,
  },
  {
    category: WordCategory.Countries,
    icon: <Flag className="h-4 w-4" />,
  },
  {
    category: WordCategory.Objects,
    icon: <Box className="h-4 w-4" />,
  },
  {
    category: WordCategory.Transportation,
    icon: <Bus className="h-4 w-4" />,
  },
  {
    category: WordCategory.PublicPlaces,
    icon: <Landmark className="h-4 w-4" />,
  },
  {
    category: WordCategory.Nature,
    icon: <Trees className="h-4 w-4" />,
  },
  {
    category: WordCategory.Kitchen,
    icon: <ChefHat className="h-4 w-4" />,
  },
  {
    category: WordCategory.Beauty,
    icon: <Smile className="h-4 w-4" />,
  },
  {
    category: WordCategory.MoviesAndSeries,
    icon: <Popcorn className="h-4 w-4" />,
  },
];

function CategoryToggle(props: {
  category: WordCategory;
  icon: React.ReactNode;
  pressed: boolean;
  onPressedChange: (pressed: boolean) => void;
}) {
  const { category, icon, pressed, onPressedChange } = props;
  return (
    <Toggle
      variant="outline"
      aria-label={`Toggle ${category} category`}
      pressed={pressed}
      onPressedChange={onPressedChange}
      className="relative"
    >
      <div className="flex items-center justify-center w-full">
        {pressed && (
          <CheckCircle className="h-4 w-4 absolute -top-1 -right-0.5" />
        )}
        {icon}
        <span className="ml-2">{category}</span>
      </div>
    </Toggle>
  );
}

export function WordCategoriesSettings() {
  const { t } = useTranslation(SPY_NAMESPACE);
  const [gameSettings, setGameSettings] = useAtom(spyGameSettingsAtom);
  const { wordCategories } = gameSettings;

  const wordCategoriesValue = () => {
    if (wordCategories.useAll) {
      return t('Todas');
    }

    return gameSettings.wordCategories.selected.length;
  };

  function onUseAllCategoriesChange(checked: boolean) {
    setGameSettings((gameSettings) => {
      gameSettings.wordCategories.useAll = checked;
      return gameSettings;
    });
  }

  function onCategoryPressedChange(category: WordCategory, pressed: boolean) {
    setGameSettings((gameSettings) => {
      if (pressed) {
        gameSettings.wordCategories.selected = Array.from(
          new Set([...gameSettings.wordCategories.selected, category])
        );
      } else {
        gameSettings.wordCategories.selected =
          gameSettings.wordCategories.selected.filter((c) => c !== category);
      }

      return gameSettings;
    });
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Card className="flex flex-col justify-center">
          <CardHeader className="items-center">
            <NotebookPen className="w-10 h-10" />
            <CardTitle>{t('Categorías')}</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl text-center w-full inline-block">
              {wordCategoriesValue()}
            </span>
          </CardContent>
        </Card>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{t('Categorias de palabras')}</DrawerTitle>
            <DrawerDescription>
              {t('Selecciona qué categorias incluir en el juego')}
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex items-center justify-center my-4 space-x-2">
            <Switch
              id="spy-use-all-categories"
              checked={wordCategories.useAll}
              onCheckedChange={onUseAllCategoriesChange}
            />
            <Label htmlFor="spy-use-all-categories">{t('Todas')}</Label>
          </div>
          {!wordCategories.useAll && (
            <div className="grid grid-cols-2 gap-3 p-6">
              {categories.map((category) => (
                <CategoryToggle
                  key={category.category}
                  category={category.category}
                  icon={category.icon}
                  pressed={wordCategories.selected.includes(category.category)}
                  onPressedChange={(pressed) =>
                    onCategoryPressedChange(category.category, pressed)
                  }
                />
              ))}
            </div>
          )}
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>{t('Listo!')}</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
