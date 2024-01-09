import { Outlet } from 'react-router-dom';
import { SiteHeader } from './site-header/site-header';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return (
    <>
      <SiteHeader />
      <main className="bg-background min-h-screen">
        <Outlet />
      </main>
    </>
  );
}
