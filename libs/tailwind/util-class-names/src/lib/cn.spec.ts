import { cn } from './cn';

describe('cn', () => {
  it('should work', () => {
    expect(cn('a', 'b')).toEqual('a b');
  });
});
