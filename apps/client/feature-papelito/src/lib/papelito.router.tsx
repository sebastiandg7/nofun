import { Navigate, type RouteObject } from 'react-router-dom';
import { SetupPage } from './routes/setup/setup.page';
import { setupRouter } from './routes/setup/setup.router';

export const papelitoRouter: RouteObject[] = [
  {
    path: '',
    element: <Navigate to="setup" replace />,
  },
  {
    path: 'setup',
    element: <SetupPage />,
    children: setupRouter,
  },
  {
    path: 'game',
    lazy: () => import('./routes/game/game.page'),
  },
];
