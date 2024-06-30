const { add } = require('../src/stringCalculator');

test('should return the sum of multiple comma-separated numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
}); 
  