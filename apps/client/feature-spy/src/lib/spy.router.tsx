import type { RouteObject } from 'react-router-dom';
import { SetupPage } from './routes/setup/setup.page';
import { GamePage } from './routes/game/game.page';

export const spyRouter: RouteObject[] = [
  {
    path: '',
    element: <SetupPage />,
  },
  {
    path: 'game',
    element: <GamePage />,
  },
];
