import { Match } from './match.model';

describe('Match', () => {
  it('should create an instance', () => {
    expect(new Match(1, new Date(), 'STVV', 1, 1)).toBeTruthy();
  });
});
