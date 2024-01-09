import { useEffect, useState } from 'react';

export function useSystemUIModePreference(): {
  systemUIMode: 'dark' | 'light';
} {
  const systemUIModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const [systemUIMode, setSystemUIMode] = useState<'dark' | 'light'>(
    systemUIModeQuery.matches ? 'dark' : 'light'
  );

  const onSystemUIModeChange = (event: MediaQueryListEvent) => {
    const newSystemUIMode = event.matches ? 'dark' : 'light';
    setSystemUIMode(newSystemUIMode);
  };

  systemUIModeQuery.addEventListener('change', onSystemUIModeChange);

  useEffect(() => {
    return () => {
      systemUIModeQuery.removeEventListener('change', onSystemUIModeChange);
    };
  }, []);

  return { systemUIMode };
}
