import { render } from '@testing-library/react';

import { SpyGame } from './spy.game';

describe('FeatureSpy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SpyGame />);
    expect(baseElement).toBeTruthy();
  });
});
