import { render } from '@testing-library/react';
import { PapelitoGame } from './papelito-game';

describe('PapelitoGame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PapelitoGame />);
    expect(baseElement).toBeTruthy();
  });
});
