import { createBrowserRouter } from 'react-router-dom';
import { AppRootPage } from './routes/app-root-page';
import { ErrorPage } from './routes/error-page';
import { mainRouter } from '@nofun/client-feature-main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRootPage />,
    errorElement: <ErrorPage />,
    children: mainRouter,
  },
]);

export { router };
