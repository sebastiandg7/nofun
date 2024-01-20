import type { RouteObject } from 'react-router-dom';
import { SetupPage } from './routes/setup/setup.page';
import { WordRevealPage } from './routes/word-reveal/word-reveal.page';
import { TimerPage } from './routes/timer/timer.page';

export const spyRouter: RouteObject[] = [
  {
    path: 'setup',
    element: <SetupPage />,
  },
  {
    path: 'word-reveal',
    element: <WordRevealPage />,
  },
  {
    path: 'timer',
    element: <TimerPage />,
  },
];
