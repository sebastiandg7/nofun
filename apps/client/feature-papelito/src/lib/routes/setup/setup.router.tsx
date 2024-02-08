import type { RouteObject } from 'react-router-dom';
import { GroupingStep } from './steps/grouping.step';

export const setupRouter: RouteObject[] = [
  {
    path: 'grouping',
    element: <GroupingStep />,
  },
];
