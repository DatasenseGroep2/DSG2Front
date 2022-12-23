import { Calculation } from './calculation.model';

describe('Calculation', () => {
  it('should create an instance', () => {
    expect(new Calculation(1, 14, 3, 5, 2.5)).toBeTruthy();
  });
});
