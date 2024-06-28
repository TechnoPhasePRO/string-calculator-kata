const { add } = require('../src/stringCalculator');

test('should return the number itself if only one number is provided', () => {
    expect(add('1')).toBe(1);
});
  