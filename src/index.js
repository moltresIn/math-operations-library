// Addition
export function add(a, b) {
  return a + b;
}

// Subtraction
export function subtract(a, b) {
  return a - b;
}

// Multiplication
export function multiply(a, b) {
  return a * b;
}

// Division
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Exponentiation
export function exponentiate(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root
export function squareRoot(number) {
  if (number < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(number);
}

// Modulus
export function modulus(a, b) {
  return a % b;
}

// Factorial
export function factorial(number) {
  if (number < 0) {
    throw new Error("Factorial of a negative number is not defined");
  }
  if (number === 0) return 1;
  return number === 1 ? 1 : number * factorial(number - 1);
}
