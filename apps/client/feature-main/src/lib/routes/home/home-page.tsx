import { Button, Icons } from '@nofun/ui-components';
import React from 'react';
import { GameCard } from './components/game-card';
import { useTranslation } from 'react-i18next';
import { MAIN_NAMESPACE } from '../../i18n/constants';

type GameData = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  commingSoon?: boolean;
};

export function HomePage() {
  const { t } = useTranslation(MAIN_NAMESPACE);

  const games: GameData[] = [
    {
      title: t('games.spy.title'),
      description: t('games.spy.description'),
      icon: <Icons.Spy className="h-16 w-16 text-black dark:text-white" />,
      link: 'spy',
      commingSoon: false,
    },
    {
      title: t('games.papelito.title'),
      description: t('games.papelito.description'),
      icon: (
        <Icons.WalletCards className="h-16 w-16 text-black dark:text-white" />
      ),
      link: 'papelito',
      commingSoon:
        process.env.NODE_ENV === 'production' ||
        localStorage.getItem('enablePapelito') === 'true',
    },
    {
      title: t('games.dice.title'),
      description: t('games.dice.description'),
      icon: <Icons.Dice1Icon className="h-16 w-16 text-foreground" />,
      link: 'dice',
      commingSoon:
        process.env.NODE_ENV === 'production' ||
        localStorage.getItem('enableDice') === 'true',
    },
  ];

  function onShare() {
    if (navigator.share) {
      navigator.share({
        title: t('share.title'),
        text: t('share.text'),
        url: 'https://nofun.sebastiandg.com',
      });
    }
  }

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <header className="flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          {t('title')}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {t('description')}
        </p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
        {games.map((game) => (
          <GameCard
            key={game.title}
            title={game.title}
            description={game.description}
            icon={game.icon}
            link={game.link}
            commingSoon={game.commingSoon}
          />
        ))}
      </section>
      <footer className="flex items-center justify-center py-8">
        {navigator.canShare && navigator.canShare() && (
          <Button onClick={onShare}>{t('shareBtn')}</Button>
        )}
      </footer>
    </main>
  );
}
