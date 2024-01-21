import { useAtom } from 'jotai';
import { Outlet } from 'react-router-dom';
import { gameSessionAtom } from '../../+state/game-session.state';

export function SetupPage() {
  const [gameSession] = useAtom(gameSessionAtom);
  return (
    <div>
      <h1>Welcome to FeaturePapelito!</h1>
      <code>{JSON.stringify(gameSession)}</code>
      <Outlet />
    </div>
  );
}
