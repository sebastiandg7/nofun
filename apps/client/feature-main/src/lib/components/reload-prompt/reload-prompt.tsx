import { toast } from 'sonner';
import ReactGA from 'react-ga4';
import './reload-prompt.css';

import { useEffect } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      ReactGA.event({
        category: 'PWA',
        action: 'SW_REGISTERED',
        label: r?.active?.scriptURL,
        nonInteraction: true,
      });
    },
    onRegisterError(error) {
      ReactGA.event({
        category: 'PWA',
        action: 'SW_REGISTER_ERROR',
        label: typeof error === 'string' ? error : JSON.stringify(error),
        nonInteraction: true,
      });
      console.error('SW registration error', error);
    },
  });

  const onCloseClick = () => {
    ReactGA.event({
      category: 'PWA',
      action: 'REJECT_UPDATE',
      nonInteraction: true,
    });
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  function onReloadClick() {
    ReactGA.event({
      category: 'PWA',
      action: 'ACCEPT_UPDATE',
      nonInteraction: true,
    });
    updateServiceWorker(true);
  }

  useEffect(() => {
    if (offlineReady) {
      toast.success('App ready to work offline', {
        position: 'top-center',
      });
    }

    if (needRefresh) {
      toast.info('New content available, click on reload button to update.', {
        duration: 10000,
        position: 'top-center',
        action: {
          label: 'Reload',
          onClick: () => {
            onReloadClick();
          },
        },
        cancel: {
          label: 'Close',
          onClick: () => {
            onCloseClick();
          },
        },
      });
    }
  }, [offlineReady, needRefresh]);

  return null;
}

export { ReloadPrompt };
