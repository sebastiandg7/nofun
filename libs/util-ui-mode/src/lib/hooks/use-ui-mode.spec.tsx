import { renderHook, act } from '@testing-library/react';
import { useUIMode } from './use-ui-mode';
import { UIModeProvider } from '../components/ui-mode-provider';

describe('useUIMode', () => {
  const defaultUIMode = 'system';
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <UIModeProvider defaultUIMode={defaultUIMode} storageKey="ui-theme">
      {children}
    </UIModeProvider>
  );

  it('should return the default UI mode', () => {
    const { result } = renderHook(useUIMode, { wrapper });
    expect(result.current.uiMode).toBe(defaultUIMode);
  });

  it('should change UI Mode to light', () => {
    const { result } = renderHook(useUIMode, { wrapper });
    act(() => result.current.setUIMode('light'));
    expect(result.current.uiMode).toBe('light');
  });

  it('should change UI Mode to dark', () => {
    const { result } = renderHook(useUIMode, { wrapper });
    act(() => result.current.setUIMode('dark'));
    expect(result.current.uiMode).toBe('dark');
  });

  it('should change UI Mode to system', () => {
    const { result } = renderHook(useUIMode, { wrapper });
    act(() => result.current.setUIMode('light'));
    act(() => result.current.setUIMode('system'));
    expect(result.current.uiMode).toBe('system');
  });
});
