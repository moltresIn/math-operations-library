# Math Operations Library

A lightweight JavaScript library providing essential mathematical operations, including addition, subtraction, multiplication, division, exponentiation, square root, modulus, and factorial. Now supports operations on arrays.

## Features

- Perform basic arithmetic operations: add, subtract, multiply, divide
- Advanced operations: exponentiation, square root, modulus, and factorial
- Array operations: perform addition, subtraction, multiplication, and division on arrays
- Simple API for quick integration into any project

## Installation

### Using npm:

```bash
npm install math-operations-library
```

### Using Yarn:

```bash
yarn add math-operations-library
```

## Usage

### Importing Functions

You can import specific functions from the library:

```javascript
import {
  add,
  subtract,
  multiply,
  divide,
  addArray,
  subtractArray,
  multiplyArray,
  divideArray,
} from "math-operations-library";

console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6
console.log(multiply(2, 3)); // 6
console.log(divide(10, 2)); // 5
console.log(addArray([1, 2], [3, 4])); // [4, 6]
console.log(subtractArray([5, 6], [2, 1])); // [3, 5]
console.log(multiplyArray([2, 3], [4, 5])); // [8, 15]
console.log(divideArray([10, 20], [2, 5])); // [5, 4]
```

### Functions Available

#### `add(a, b)`

Returns the sum of two numbers.

#### `subtract(a, b)`

Returns the difference between two numbers.

#### `multiply(a, b)`

Returns the product of two numbers.

#### `divide(a, b)`

Returns the quotient of two numbers. Throws an error if `b` is zero.

#### `addArray(arr1, arr2)`

Adds two arrays element-wise. Throws an error if the arrays are of different lengths.

#### `subtractArray(arr1, arr2)`

Subtracts two arrays element-wise. Throws an error if the arrays are of different lengths.

#### `multiplyArray(arr1, arr2)`

Multiplies two arrays element-wise. Throws an error if the arrays are of different lengths.

#### `divideArray(arr1, arr2)`

Divides two arrays element-wise. Throws an error if the arrays are of different lengths or if an element in the second array is zero.

#### `exponentiate(base, exponent)`

Returns the result of raising `base` to the power of `exponent`.

#### `squareRoot(number)`

Returns the square root of a number. Throws an error if the number is negative.

#### `modulus(a, b)`

Returns the remainder of dividing `a` by `b`.

#### `factorial(number)`

Returns the factorial of a number. Throws an error if the number is negative.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/moltresIn/math-operations-library.git).

## License

This library is licensed under the [MIT License](LICENSE).
