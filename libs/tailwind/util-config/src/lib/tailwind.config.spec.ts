import * as twConfig from './tailwind.config';

describe('tailwind.config.js', () => {
  it('should export a valid tailwind config', () => {
    expect(twConfig).toBeDefined();
  });
});
