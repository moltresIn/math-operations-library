'use strict';

// Addition
function add(a, b) {
  return a + b;
}

// Subtraction
function subtract(a, b) {
  return a - b;
}

// Multiplication
function multiply(a, b) {
  return a * b;
}

// Division
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Exponentiation
function exponentiate(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root
function squareRoot(number) {
  if (number < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(number);
}

// Modulus
function modulus(a, b) {
  return a % b;
}

// Factorial
function factorial(number) {
  if (number < 0) {
    throw new Error("Factorial of a negative number is not defined");
  }
  if (number === 0) return 1;
  return number === 1 ? 1 : number * factorial(number - 1);
}

exports.add = add;
exports.divide = divide;
exports.exponentiate = exponentiate;
exports.factorial = factorial;
exports.modulus = modulus;
exports.multiply = multiply;
exports.squareRoot = squareRoot;
exports.subtract = subtract;
