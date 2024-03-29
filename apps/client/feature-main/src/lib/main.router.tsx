import type { RouteObject } from 'react-router-dom';
import { HomePage } from './routes/home/home-page';
import { spyRouter } from '@nofun/client-feature-spy';

export const mainRouter: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/spy',
    lazy: () => import('./routes/spy/spy-page'),
    children: spyRouter,
  },
  {
    path: '/papelito',
    lazy: () => import('./routes/papelito/papelito-page'),
  },
  {
    path: '/dice',
    lazy: () => import('./routes/dice/dice-page'),
  },
  {
    path: '/about',
    element: <div>About</div>,
  },
];
