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
    const audio = new Audio('assets/audio/wrong-buzzer.mp3');
    audio.volume = 1;
    navigator.vibrate(audio.duration);
    audio.play();
  }

  const timerDuration =
    process.env.NODE_ENV === 'development'
      ? 5000
      : gameSettings.timer.durationInMins * 60 * 1000;

  return (
    <div className="flex flex-col justify-center items-center h-full flex-1">
      {gameSettings.timer.enabled && (
        <Countdown
          onComplete={onTimerComplete}
          date={Date.now() + timerDuration}
          renderer={({ minutes, seconds, completed }) => (
            <>
              <div
                className={cn(
                  'duration-200 delay-200 origin-bottom transition-transform ease-in-shake',
                  { 'rotate-[0.25deg]': completed }
                )}
              >
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
              </div>
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
