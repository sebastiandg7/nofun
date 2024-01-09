import { render } from '@testing-library/react';
import { DiceGame } from './dice-game';

describe('DiceGame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DiceGame />);
    expect(baseElement).toBeTruthy();
  });
});
