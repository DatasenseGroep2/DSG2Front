import { Weight } from './weight.model';

describe('Weight', () => {
  it('should create an instance', () => {
    expect(new Weight(1, 1, 74, new Date())).toBeTruthy();
  });
});
