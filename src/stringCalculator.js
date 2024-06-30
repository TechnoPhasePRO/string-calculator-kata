function add(numbers) {
  if (numbers === '') return 0;
  numbers = numbers.replace(/\n/g, ',');
  const nums = numbers.split(',').map(Number);
  return nums.reduce((a, b) => a + b, 0);
}

module.exports = { add };  