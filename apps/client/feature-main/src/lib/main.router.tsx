import type { RouteObject } from 'react-router-dom';
import { SpyPage } from './routes/spy/spy-page';
import { HomePage } from './routes/home/home-page';
import { PapelitoPage } from './routes/papelito/papelito-page';
import { DicePage } from './routes/dice/dice-page';

export const mainRouter: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/spy',
    element: <SpyPage />,
  },
  {
    path: '/papelito',
    element: <PapelitoPage />,
  },
  {
    path: '/dice',
    element: <DicePage />,
  },
  {
    path: '/about',
    element: <div>About</div>,
  },
];
