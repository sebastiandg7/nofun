import { Button } from '@nofun/ui-components';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SPY_NAMESPACE } from '../../i18n/constants';
import { GameSettings } from './components/game-settings';

export function SetupPage() {
  const { t } = useTranslation(SPY_NAMESPACE);
  const navigate = useNavigate();

  function onStartGamePressed() {
    navigate('game');
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
