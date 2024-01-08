import { render } from '@testing-library/react';

import FeatureSpy from './feature-spy';

describe('FeatureSpy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureSpy />);
    expect(baseElement).toBeTruthy();
  });
});
