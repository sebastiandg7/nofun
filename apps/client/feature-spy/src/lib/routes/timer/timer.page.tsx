import { cn } from '@nofun/tailwind-util-class-names';
import { Button, Icons } from '@nofun/ui-components';
import { useWakeLock } from '@nofun/util-browser';
import { useAtom } from 'jotai';
import { Timer } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Countdown from 'react-countdown';
import { useTranslation } from 'react-i18next';
import { GameStage, spyGameSessionAtom } from '../../+state/game-session.state';
import { spyGameSettingsAtom } from '../../+state/game-settings.state';
import { SPY_NAMESPACE } from '../../i18n/constants';

export function TimerPage() {
  const [gameSettings] = useAtom(spyGameSettingsAtom);
  const [, setGameSession] = useAtom(spyGameSessionAtom);
  const { t } = useTranslation(SPY_NAMESPACE);
  const timerDone = useRef(false);

  const {
    isSupported: isWakeLockSupported,
    released: isWakeLockReleased,
    request: requestWakeLock,
    release: releaseWakeLock,
  } = useWakeLock({
    onRequest: () => {},
    onError: () => {},
    onRelease: () => {},
  });

  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (
        isWakeLockSupported &&
        document.visibilityState === 'visible' &&
        gameSettings.timer.enabled &&
        !timerDone.current
      ) {
        console.log('[visiblitychange: visible] request wake lock');
        await requestWakeLock();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (isWakeLockSupported && !isWakeLockReleased) {
        releaseWakeLock();
      }
    };
  }, []);

  function onPlayAgainPressed() {
    setGameSession((_gameSession) => {
      _gameSession.gameStage = GameStage.Setup;
      return _gameSession;
    });
  }

  function formatTimerNumber(number: number) {
    return number.toString().padStart(2, '0');
  }

  async function onTimerStart() {
    if (gameSettings.timer.enabled && isWakeLockSupported) {
      await requestWakeLock();
    }
  }

  function onTimerComplete() {
    timerDone.current = true;
    if (isWakeLockSupported && !isWakeLockReleased) {
      releaseWakeLock();
    }
    const timerCompleteAudio = new Audio('assets/audio/wrong-buzzer.mp3');
    timerCompleteAudio.volume = 1;
    timerCompleteAudio.play();
    navigator.vibrate(1500);
  }

  const timerDuration =
    process.env.NODE_ENV === 'development'
      ? 10000
      : gameSettings.timer.durationInMins * 60 * 1000;
  const timerTimestamp = Date.now() + timerDuration;

  return (
    <div className="flex flex-col justify-center items-center h-full flex-1">
      {gameSettings.timer.enabled && (
        <Countdown
          onStart={onTimerStart}
          onComplete={onTimerComplete}
          date={timerTimestamp}
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
        <>
          <Icons.Spy className="w-32 h-32 text-foreground mx-auto mb-4" />
          <span className="text-2xl font-bold text-foreground mx-auto mb-8">
            {t('Quién es el espía?')}
          </span>
        </>
      )}
      <Button className="mx-auto min-w-32" onClick={onPlayAgainPressed}>
        {t('Jugar de nuevo')}
      </Button>
    </div>
  );
}
