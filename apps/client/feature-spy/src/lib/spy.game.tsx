import { useTranslation } from 'react-i18next';
import { SPY_NAMESPACE } from './i18n/constants';

/* eslint-disable-next-line */
export interface FeatureSpyProps {}

export function SpyGame(props: FeatureSpyProps) {
  const { t } = useTranslation(SPY_NAMESPACE);
  return (
    <div className="p-5">
      <h1>Welcome to {t('game.title')}!</h1>
    </div>
  );
}
