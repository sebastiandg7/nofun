import { Button } from '@nofun/ui-components';
import { useAtom } from 'jotai';
import { useTranslation } from 'react-i18next';
import { GameStage, spyGameSessionAtom } from '../../+state/game-session.state';
import { SPY_NAMESPACE } from '../../i18n/constants';
import { GameSettings } from './components/game-settings';

export function SetupPage() {
  const [, setGameSession] = useAtom(spyGameSessionAtom);
  const { t } = useTranslation(SPY_NAMESPACE);

  function onStartGamePressed() {
    // navigate('game');
    setGameSession((_gameSession) => {
      _gameSession.gameStage = GameStage.WordReveal;
      return _gameSession;
    });
  }

  return (
    <div className="flex-1 flex flex-col justify-center h-full">
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 mx-auto">
        {t('Configura tu juego')}
      </h1>
      <GameSettings />
      <Button className="mx-auto min-w-32" onClick={onStartGamePressed}>
        Jugar!
      </Button>
    </div>
  );
}
