import { FootballerMatch } from './footballer-match.model';

describe('FootballerMatch', () => {
  it('should create an instance', () => {
    expect(
      new FootballerMatch(1, 1, false, 1, new Date(), 'STVV', 1, 1)
    ).toBeTruthy();
  });
});
