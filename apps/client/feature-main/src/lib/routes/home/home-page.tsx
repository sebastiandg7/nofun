import { Button } from '@nofun/ui-components';
import React from 'react';
import { GameCard } from './components/game-card';

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
    icon: <SpyIcon className="h-16 w-16 text-black dark:text-white" />,
    link: 'spy',
    commingSoon: true,
  },
  {
    title: 'Papelito',
    description: 'Make your team guess as many words as possible.',
    icon: <WalletCardsIcon className="h-16 w-16 text-black dark:text-white" />,
    link: 'papelito',
    commingSoon: true,
  },
  {
    title: 'Dice',
    description: 'Roll the dice and take your chances.',
    icon: <Dice1Icon className="h-16 w-16 text-foreground" />,
    link: 'dice',
    commingSoon: true,
  },
];

export function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <header className="flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Nofun Games
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Choose a game to start the fun!
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

// function BeerIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
//       <path d="M9 12v6" />
//       <path d="M13 12v6" />
//       <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" />
//       <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
//     </svg>
//   );
// }

function SpyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
      >
        <path
          d="M323 981 c-38 -24 -82 -111 -114 -228 l-22 -82 -66 -22 c-69 -23
 -121 -65 -121 -97 0 -33 37 -69 95 -93 50 -21 55 -26 55 -53 0 -24 -8 -36 -36
 -55 -37 -26 -114 -108 -114 -122 0 -5 30 -30 67 -57 36 -26 78 -56 91 -68 l25
 -21 -23 -31 c-19 -26 -21 -35 -11 -45 10 -10 19 -4 47 27 19 22 34 47 34 56 0
 9 -40 43 -92 80 l-92 63 58 54 57 53 29 -22 c17 -13 47 -60 69 -105 137 -282
 345 -282 482 0 22 45 52 92 69 105 l29 22 57 -53 57 -53 -91 -65 c-51 -35 -92
 -71 -92 -80 0 -9 15 -33 34 -55 28 -31 37 -37 47 -27 10 10 8 19 -11 45 l-23
 31 25 21 c13 12 55 42 91 68 37 27 67 52 67 57 0 14 -77 96 -114 122 -28 19
 -36 31 -36 55 0 27 5 32 55 53 58 24 95 60 95 93 0 33 -52 74 -121 97 l-66 22
 -23 82 c-33 120 -75 205 -113 228 -41 24 -68 24 -117 -1 -22 -11 -49 -20 -60
 -20 -11 0 -38 9 -60 20 -49 25 -76 25 -117 1z m130 -47 c46 -18 48 -18 95 0
 82 32 96 31 125 -3 29 -35 68 -132 71 -176 1 -28 -3 -31 -54 -49 -79 -28 -301
 -28 -380 0 -51 18 -55 21 -54 49 3 44 42 141 71 176 29 34 43 35 126 3z m-143
 -271 c42 -13 88 -18 190 -18 126 0 182 9 256 41 6 3 14 -7 17 -22 4 -23 0 -28
 -37 -45 -123 -54 -418 -47 -499 13 -19 14 -13 62 7 54 6 -3 36 -13 66 -23z
 m-12 -100 c43 -13 93 -17 202 -17 160 0 236 15 287 58 l29 24 53 -18 c29 -10
 62 -27 74 -38 18 -18 19 -23 6 -38 -46 -56 -210 -88 -449 -88 -239 0 -403 32
 -449 88 -13 15 -12 20 6 38 12 11 45 28 74 38 l53 18 29 -24 c15 -13 54 -32
 85 -41z m-26 -149 c3 -3 9 -18 13 -34 9 -41 58 -80 102 -80 40 0 93 45 93 79
 0 14 6 21 20 21 14 0 20 -7 20 -21 0 -34 53 -79 93 -79 44 0 93 39 102 81 7
 32 10 34 63 43 29 5 32 3 32 -20 0 -16 -12 -37 -31 -55 -17 -16 -48 -64 -69
 -106 -51 -105 -92 -158 -139 -183 -105 -53 -198 8 -283 186 -19 38 -48 83 -66
 101 -20 19 -32 41 -32 58 0 25 2 26 38 19 20 -4 40 -8 44 -10z m146 -14 c15 0
 22 -6 22 -20 0 -21 -27 -40 -59 -40 -25 0 -61 33 -61 56 0 14 7 15 38 10 20
 -3 47 -6 60 -6z m262 -5 c0 -22 -37 -55 -61 -55 -31 0 -59 19 -59 40 0 14 9
 20 38 23 76 8 82 7 82 -8z"
        />
      </g>
    </svg>
  );
}

function Dice1Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M12 12h.01" />
    </svg>
  );
}

function WalletCardsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
    </svg>
  );
}
