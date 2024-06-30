const { add } = require('../src/stringCalculator');

test('should support different delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
});
  
  
  