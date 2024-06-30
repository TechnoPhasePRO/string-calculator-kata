const { add } = require('../src/stringCalculator');

test('should return the sum of two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
});
  