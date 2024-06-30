function add(numbers) {
  if (numbers === '') return 0;

  let delimiter = ',';
  if (numbers.startsWith('//')) {
    const delimiterLineEnd = numbers.indexOf('\n');
    delimiter = numbers.substring(2, delimiterLineEnd);
    numbers = numbers.substring(delimiterLineEnd + 1);
  }

  numbers = numbers.replace(/\n/g, delimiter);
  const nums = numbers.split(delimiter).map(Number);
  return nums.reduce((a, b) => a + b, 0);
}

module.exports = { add };