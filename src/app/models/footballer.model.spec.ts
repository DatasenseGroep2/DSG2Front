import { Footballer } from './footballer.model';

describe('Footballer', () => {
  it('should create an instance', () => {
    expect(
      new Footballer(
        1,
        'Jos',
        'Appeltans',
        'male',
        'P1',
        'Defender',
        1,
        new Date(),
        1.85,
        'left'
      )
    ).toBeTruthy();
  });
});
