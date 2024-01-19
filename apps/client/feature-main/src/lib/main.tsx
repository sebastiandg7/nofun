import { Outlet, useLocation } from 'react-router-dom';
import { SiteHeader } from './components/site-header/site-header';
import { ReloadPrompt } from './components/reload-prompt/reload-prompt';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
      title: location.key,
    });
  }, [location]);

  return (
    <main className="min-h-screen flex flex-col">
      <ReloadPrompt />
      <SiteHeader />
      <section className="bg-background h-full flex-1 flex flex-col">
        <Outlet />
      </section>
    </main>
  );
}
