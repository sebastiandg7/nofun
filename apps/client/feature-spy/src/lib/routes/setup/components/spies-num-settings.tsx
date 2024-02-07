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
  Icons,
} from '@nofun/ui-components';
import { useAtom } from 'jotai';
import { Minus, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { spyGameSettingsAtom } from '../../../+state/game-settings.state';
import { SPY_NAMESPACE } from '../../../i18n/constants';

const MAX_SPIES = 33;
const MIN_SPIES = 1;

export function SpiesNumSettings() {
  const { t } = useTranslation(SPY_NAMESPACE);
  const [gameSettings, setGameSettings] = useAtom(spyGameSettingsAtom);
  const { spyCount } = gameSettings;

  function onClick(adjustment: number) {
    setGameSettings((settings) => {
      settings.spyCount = Math.max(
        MIN_SPIES,
        Math.min(MAX_SPIES, settings.spyCount + adjustment)
      );
      return settings;
    });
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Card className="flex flex-col justify-center">
          <CardHeader className="items-center">
            <Icons.Spy className="w-10 h-10 mb-1" />
            <CardTitle>{t('setup.settings.spies.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl text-center w-full inline-block">
              {spyCount}
            </span>
          </CardContent>
        </Card>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{t('setup.settings.spies.num')}</DrawerTitle>
            <DrawerDescription>
              {t('setup.settings.spies.description')}
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-16 w-16 shrink-0 rounded-full"
                onClick={() => onClick(-1)}
                disabled={spyCount <= MIN_SPIES}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {spyCount}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  {t('setup.settings.spies.title')}
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-16 w-16 shrink-0 rounded-full"
                onClick={() => onClick(1)}
                disabled={spyCount >= MAX_SPIES}
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
          </div>
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
