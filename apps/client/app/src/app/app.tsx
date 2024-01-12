import { RouterProvider } from 'react-router-dom';
import { router } from './app.router';
import { UIModeProvider } from '@nofun/util-ui-mode';

export function App() {
  return (
    <UIModeProvider defaultUIMode="system" storageKey="ui-theme">
      <RouterProvider router={router} />
    </UIModeProvider>
  );
}

export default App;
