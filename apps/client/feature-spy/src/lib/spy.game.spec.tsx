import { render } from '@testing-library/react';

import { SpyGame } from './spy.game';
import { BrowserRouter } from 'react-router-dom';

describe('FeatureSpy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <SpyGame />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
