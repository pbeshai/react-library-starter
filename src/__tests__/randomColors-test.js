import randomColors from '../randomColors';

describe('randomColors', () => {
  it('generates an array of the correct length', () => {
    expect(randomColors(12).length).toBe(12);
    expect(randomColors(0).length).toBe(0);
    expect(randomColors(1).length).toBe(1);
    expect(randomColors(100).length).toBe(100);
  });
});
