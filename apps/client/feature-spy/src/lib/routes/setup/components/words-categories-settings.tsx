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
import { CheckCircle, NotebookPen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { spyGameSettingsAtom } from '../../../+state/game-settings.state';
import { categoriesConfig } from '../../../config/categories';
import { SPY_NAMESPACE } from '../../../i18n/constants';

const supportedCategories: Array<WordCategory> = [
  WordCategory.Animals,
  WordCategory.Colors,
  WordCategory.Sports,
  WordCategory.Countries,
  WordCategory.Objects,
  WordCategory.Transportation,
  WordCategory.PublicPlaces,
  WordCategory.Nature,
  WordCategory.Kitchen,
  WordCategory.Beauty,
  WordCategory.MoviesAndSeries,
];

function CategoryToggle(props: {
  category: WordCategory;
  pressed: boolean;
  onPressedChange: (pressed: boolean) => void;
}) {
  const { category, pressed, onPressedChange } = props;
  const { t } = useTranslation(SPY_NAMESPACE);
  const categoryConfig = categoriesConfig[category];
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
        <categoryConfig.icon />
        <span className="ml-2">{t(categoryConfig.label)}</span>
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
      return t('setup.settings.categories.toggle_all');
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
            <CardTitle>{t('setup.settings.categories.title')}</CardTitle>
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
            <DrawerTitle>{t('setup.settings.categories.title')}</DrawerTitle>
            <DrawerDescription>
              {t('setup.settings.categories.description')}
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex items-center justify-center my-4 space-x-2">
            <Switch
              id="spy-use-all-categories"
              checked={wordCategories.useAll}
              onCheckedChange={onUseAllCategoriesChange}
            />
            <Label htmlFor="spy-use-all-categories">{t('setup.settings.categories.toggle_all')}</Label>
          </div>
          {!wordCategories.useAll && (
            <div className="grid grid-cols-2 gap-3 p-6">
              {supportedCategories.map((category) => {
                return (
                  <CategoryToggle
                    key={category}
                    category={category}
                    pressed={wordCategories.selected.includes(category)}
                    onPressedChange={(pressed) =>
                      onCategoryPressedChange(category, pressed)
                    }
                  />
                );
              })}
            </div>
          )}
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>{t('setup.settings.ready_btn')}</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
