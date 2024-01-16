import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@nofun/ui-components';
import { useAtom } from 'jotai';
import { Minus, Plus, UsersRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { spyGameSettingsAtom } from '../../../+state/game-settings.state';
import { SPY_NAMESPACE } from '../../../i18n/constants';

const MAX_PLAYERS = 99;
const MIN_PLAYERS = 3;

export function PlayersNumSettings() {
  const { t } = useTranslation(SPY_NAMESPACE);
  const [gameSettings, setGameSettings] = useAtom(spyGameSettingsAtom);
  const { playerCount } = gameSettings;

  function onClick(adjustment: number) {
    setGameSettings((settings) => {
      settings.playerCount = Math.max(
        MIN_PLAYERS,
        Math.min(MAX_PLAYERS, settings.playerCount + adjustment)
      );
      return settings;
    });
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Card className="flex flex-col justify-center">
          <CardHeader className="items-center">
            <UsersRound className="w-10 h-10" />
            <CardTitle>{t('Jugadores')}</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl text-center w-full inline-block">
              {playerCount}
            </span>
          </CardContent>
        </Card>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{t('Cantidad de jugadores')}</DrawerTitle>
          </DrawerHeader>
          <div className="p-4">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-16 w-16 shrink-0 rounded-full"
                onClick={() => onClick(-1)}
                disabled={playerCount <= MIN_PLAYERS}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {playerCount}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  {t('Jugadores')}
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-16 w-16 shrink-0 rounded-full"
                onClick={() => onClick(1)}
                disabled={playerCount >= MAX_PLAYERS}
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
          </div>
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
