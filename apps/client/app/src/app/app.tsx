import { RouterProvider } from 'react-router-dom';
import { router } from './app.router';
import { UIModeProvider } from '@nofun/util-ui-mode';
import { DevTools } from 'jotai-devtools';
import { SonnerToaster } from '@nofun/ui-components';

export function App() {
  return (
    <>
      <DevTools />
      <UIModeProvider defaultUIMode="system" storageKey="ui-theme">
        <RouterProvider router={router} />
        <SonnerToaster />
      </UIModeProvider>
    </>
  );
}

export default App;
