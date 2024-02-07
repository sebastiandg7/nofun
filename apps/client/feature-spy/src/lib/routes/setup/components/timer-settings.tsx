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
} from '@nofun/ui-components';
import { useAtom } from 'jotai';
import { Minus, Plus, Timer } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { spyGameSettingsAtom } from '../../../+state/game-settings.state';
import { SPY_NAMESPACE } from '../../../i18n/constants';
import { cn } from '@nofun/tailwind-util-class-names';

const MAX_TIMER_DURATION = 10;
const MIN_TIMER_DURATION = 1;

export function TimerSettings() {
  const { t } = useTranslation(SPY_NAMESPACE);
  const [gameSettings, setGameSettings] = useAtom(spyGameSettingsAtom);
  const {
    timer: { durationInMins, enabled },
  } = gameSettings;

  function onEnableTimerChange(checked: boolean) {
    setGameSettings((settings) => {
      settings.timer.enabled = checked;
      return settings;
    });
  }

  function onClick(adjustment: number) {
    setGameSettings((settings) => {
      settings.timer.durationInMins = Math.max(
        MIN_TIMER_DURATION,
        Math.min(MAX_TIMER_DURATION, settings.timer.durationInMins + adjustment)
      );
      return settings;
    });
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Card className="flex flex-col justify-center">
          <CardHeader className="items-center">
            <Timer className="w-10 h-10" />
            <CardTitle>{t('setup.settings.timer.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <span
              className={cn('text-center w-full inline-block', {
                'text-xl': !enabled,
                'text-2xl': enabled,
              })}
            >
              {enabled
                ? `${durationInMins} min`
                : t('setup.settings.timer.deactivate')}
            </span>
          </CardContent>
        </Card>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{t('setup.settings.timer.title')}</DrawerTitle>
            <DrawerDescription>
              {t('setup.settings.timer.description')}
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex items-center justify-center my-4 space-x-2">
            <Switch
              id="spy-use-timer"
              checked={enabled}
              onCheckedChange={onEnableTimerChange}
            />
            <Label htmlFor="spy-use-timer">
              {t('setup.settings.timer.toggle')}
            </Label>
          </div>
          {enabled && (
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-16 w-16 shrink-0 rounded-full"
                  onClick={() => onClick(-1)}
                  disabled={durationInMins <= MIN_TIMER_DURATION}
                >
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold tracking-tighter">
                    {durationInMins}
                  </div>
                  <div className="text-[0.70rem] uppercase text-muted-foreground">
                    {t('setup.settings.timer.time')}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-16 w-16 shrink-0 rounded-full"
                  onClick={() => onClick(1)}
                  disabled={durationInMins >= MAX_TIMER_DURATION}
                >
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
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
