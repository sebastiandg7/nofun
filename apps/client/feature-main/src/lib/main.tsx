import { Outlet } from 'react-router-dom';
import { SiteHeader } from './components/site-header/site-header';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="bg-background h-full flex-1 flex flex-col">
        <Outlet />
      </section>
    </main>
  );
}
