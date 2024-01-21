import type { RouteObject } from 'react-router-dom';
import { SetupPage } from './routes/setup/setup.page';

export const papelitoRouter: RouteObject[] = [
  {
    path: 'setup',
    element: <SetupPage />,
  },
];
