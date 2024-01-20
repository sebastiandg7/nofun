import { Button } from '@nofun/ui-components';
import { useAtom } from 'jotai';
import { useTranslation } from 'react-i18next';
import { GameStage, spyGameSessionAtom } from '../../+state/game-session.state';
import { spyGameSettingsAtom } from '../../+state/game-settings.state';
import { SPY_NAMESPACE } from '../../i18n/constants';
import Countdown from 'react-countdown';
import { Timer } from 'lucide-react';
import { cn } from '@nofun/tailwind-util-class-names';

export function TimerPage() {
  const [gameSettings] = useAtom(spyGameSettingsAtom);
  const [, setGameSession] = useAtom(spyGameSessionAtom);
  const { t } = useTranslation(SPY_NAMESPACE);

  function onPlayAgainPressed() {
    setGameSession((_gameSession) => {
      _gameSession.gameStage = GameStage.Setup;
      return _gameSession;
    });
  }

  function formatTimerNumber(number: number) {
    return number.toString().padStart(2, '0');
  }

  function onTimerComplete() {
    navigator.vibrate(1000);
  }

  return (
    <div className="flex flex-col justify-center items-center h-full flex-1">
      {gameSettings.timer.enabled && (
        <Countdown
          onComplete={onTimerComplete}
          date={Date.now() + gameSettings.timer.durationInMins * 60 * 1000}
          renderer={({ minutes, seconds, completed }) => (
            <>
              <Timer
                className={cn('w-24 h-24 text-foreground mx-auto mb-4', {
                  'text-red-800': completed,
                })}
              />
              <h2
                className={cn(
                  'text-8xl font-bold text-foreground mx-auto mb-4',
                  {
                    'text-red-800': completed,
                  }
                )}
              >
                {formatTimerNumber(minutes)}:{formatTimerNumber(seconds)}
              </h2>
              <span className="text-xl text-foreground mx-auto mb-8">
                {completed ? t('Se acabó el tiempo!') : t('Quién es el espía?')}
              </span>
            </>
          )}
        />
      )}
      {!gameSettings.timer.enabled && (
        <span className="text-xl text-foreground mx-auto mb-8">
          {t('Quién es el espía?')}
        </span>
      )}
      <Button className="mx-auto min-w-32" onClick={onPlayAgainPressed}>
        {t('Jugar de nuevo')}
      </Button>
    </div>
  );
}
