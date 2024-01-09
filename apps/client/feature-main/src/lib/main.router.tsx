import type { RouteObject } from 'react-router-dom';
import { SpyPage } from './routes/spy-page';

export const mainRouter: RouteObject[] = [
  {
    path: '/',
    element: <div>Home</div>,
  },
  {
    path: '/spy',
    element: <SpyPage />,
  },
  {
    path: '/about',
    element: <div>About</div>,
  },
];
