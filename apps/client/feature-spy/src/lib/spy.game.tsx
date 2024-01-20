import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { GameStage, spyGameSessionAtom } from './+state/game-session.state';

/* eslint-disable-next-line */
export interface FeatureSpyProps {}

export function SpyGame(props: FeatureSpyProps) {
  const [gameSession] = useAtom(spyGameSessionAtom);
  const navigate = useNavigate();

  useEffect(() => {
    switch (gameSession.gameStage) {
      case GameStage.Setup:
        navigate('setup');
        break;
      case GameStage.WordReveal:
        navigate('word-reveal');
        break;
      case GameStage.Timer:
        navigate('timer');
        break;
      default:
        navigate('setup');
        break;
    }
  }, [gameSession]);

  return <Outlet />;
}
