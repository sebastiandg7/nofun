import { Outlet } from 'react-router-dom';
import { SiteHeader } from './components/site-header/site-header';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="bg-background h-full">
        <Outlet />
      </section>
    </main>
  );
}
