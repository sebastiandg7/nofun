import { render } from '@testing-library/react';

import { Main } from './main';
import { BrowserRouter } from 'react-router-dom';

describe('FeatureMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
