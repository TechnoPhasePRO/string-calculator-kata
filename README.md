# String Calculator TDD Kata

This project implements a String Calculator using Test-Driven Development (TDD) principles in JavaScript.

## Functionality

The String Calculator (`add` function) performs the following operations:

- It can add numbers provided as a comma-separated string.
- It handles new lines between numbers as well as custom delimiters.
- Negative numbers will throw an exception.
- It supports an unlimited number of numbers to be added.

## Setup

To run the project locally or integrate it into your own application:

1. Clone this repository:
```css
git clone https://github.com/TechnoPhasePRO/string-calculator-kata.git
```
2. Navigate to the project directory:
```css
cd string-calculator-kata
```
3. Install dependencies:
```bash
npm install
```

## Usage

To use the String Calculator function in your JavaScript application:

```javascript
const { add } = require('./src/stringCalculator');

// Example logs:
console.log(add('1,2,3')); // Output: 6
console.log(add('//;\n1;2')); // Output: 3
```

## Testing
This project uses Jest as the testing framework. To run tests:
```bash
npm test
```

## Contributing
Contributions are welcome! Feel free to fork this repository and submit pull requests.

