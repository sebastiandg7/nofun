import { createContext, useEffect, useState } from 'react';
import { useSystemUIModePreference } from '../hooks/use-system-ui-mode-preference';

type UIMode = 'dark' | 'light' | 'system';

type UIModeProviderProps = {
  children: React.ReactNode;
  defaultUIMode?: UIMode;
  storageKey?: string;
};

type UIModeProviderState = {
  uiMode: UIMode;
  setUIMode: (uiMode: UIMode) => void;
};

const initialState: UIModeProviderState = {
  uiMode: 'system',
  setUIMode: () => null,
};

export const UIModeProviderContext =
  createContext<UIModeProviderState>(initialState);

export function UIModeProvider({
  children,
  defaultUIMode: defaultUIMode = 'system',
  storageKey = 'ui-mode',
  ...props
}: UIModeProviderProps) {
  const [uiMode, setUIMode] = useState<UIMode>(
    () => (localStorage.getItem(storageKey) as UIMode) || defaultUIMode
  );
  const { systemUIMode } = useSystemUIModePreference();

  const root = window.document.documentElement;

  useEffect(() => {
    root.classList.remove('light', 'dark');

    if (uiMode === 'system') {
      root.classList.add(systemUIMode);
      return;
    }
    root.classList.add(uiMode);
  }, [uiMode, systemUIMode, root.classList]);

  const value: UIModeProviderState = {
    uiMode,
    setUIMode: (theme: UIMode) => {
      localStorage.setItem(storageKey, theme);
      setUIMode(theme);
    },
  };

  return (
    <UIModeProviderContext.Provider {...props} value={value}>
      {children}
    </UIModeProviderContext.Provider>
  );
}
