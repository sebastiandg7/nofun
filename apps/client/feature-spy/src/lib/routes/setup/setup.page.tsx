import { Button } from '@nofun/ui-components';
import { useAtom } from 'jotai';
import { useTranslation } from 'react-i18next';
import { GameStage, spyGameSessionAtom } from '../../+state/game-session.state';
import { SPY_NAMESPACE } from '../../i18n/constants';
import { GameSettings } from './components/game-settings';
import { RotateCcw } from 'lucide-react';
import { HelpDialog } from './components/help-dialog';

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
    <div className="flex-1 flex flex-col justify-center h-full relative mx-auto">
      <HelpDialog />
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 mx-auto">
        {t('Configuración')}
      </h1>
      <Button size="icon" variant="secondary" className="ml-5 mr-auto" onClick={onStartGamePressed}>
        <RotateCcw className='w-4 h-4'/>
      </Button>
      <GameSettings />
      <Button className="mt-2 mx-auto min-w-32" onClick={onStartGamePressed}>
        Jugar!
      </Button>
    </div>
  );
}
