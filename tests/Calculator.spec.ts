const Calculator = require('../src/calculator');

describe('#Calculator', () => {
  test('should return 3 when give 1 and 2 as parameters', () => {
    expect(Calculator.sum(1, 2)).toBe(3);
  });
});
