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

const games: GameData[] = [
  {
    title: 'Spy',
    description: "Discover the impostor before it's too late.",
    icon: <Icons.Spy className="h-16 w-16 text-black dark:text-white" />,
    link: 'spy',
    commingSoon:
      process.env.NODE_ENV === 'production' ||
      localStorage.getItem('enableSpy') === 'true',
  },
  {
    title: 'Papelito',
    description: 'Make your team guess as many words as possible.',
    icon: (
      <Icons.WalletCards className="h-16 w-16 text-black dark:text-white" />
    ),
    link: 'papelito',
    commingSoon: true,
  },
  {
    title: 'Dice',
    description: 'Roll the dice and take your chances.',
    icon: <Icons.Dice1Icon className="h-16 w-16 text-foreground" />,
    link: 'dice',
    commingSoon: true,
  },
];

export function HomePage() {
  const { t } = useTranslation(MAIN_NAMESPACE);

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
        <Button>Invite Friends</Button>
      </footer>
    </main>
  );
}
