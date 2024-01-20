import { render } from '@testing-library/react';

import UtilBrowser from './util-browser';

describe('UtilBrowser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilBrowser />);
    expect(baseElement).toBeTruthy();
  });
});
