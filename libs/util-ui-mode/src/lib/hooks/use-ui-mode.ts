import { useContext } from 'react';
import { UIModeProviderContext } from '../components/ui-mode-provider';

export const useUIMode = () => {
  const context = useContext(UIModeProviderContext);

  if (context === undefined)
    throw new Error(
      `useUIMode must be used within a ${UIModeProviderContext.displayName}`
    );

  return context;
};
