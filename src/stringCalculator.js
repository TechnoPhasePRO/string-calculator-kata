function add(numbers) {
  // If empty string, return 0
  if (numbers === '') return 0;

  let delimiter = ',';
  if (numbers.startsWith('//')) {
    const delimiterLineEnd = numbers.indexOf('\n');
    delimiter = numbers.substring(2, delimiterLineEnd);
    // Updating numbers string
    numbers = numbers.substring(delimiterLineEnd + 1);
  }
  numbers = numbers.replace(/\n/g, delimiter);
  const nums = numbers.split(delimiter).map(Number);

  // Checking for negative numbers
  const negativeNumbers = nums.filter(n => n < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed: ${negativeNumbers.join(', ')}`);
  }
  // return the sum of numbers
  return nums.reduce((a, b) => a + b, 0);
}

module.exports = { add };