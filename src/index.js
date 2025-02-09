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

// Array Addition
export function addArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must be of the same length");
  }
  return arr1.map((value, index) => value + arr2[index]);
}

// Array Subtraction
export function subtractArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must be of the same length");
  }
  return arr1.map((value, index) => value - arr2[index]);
}

// Array Multiplication
export function multiplyArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must be of the same length");
  }
  return arr1.map((value, index) => value * arr2[index]);
}

// Array Division
export function divideArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must be of the same length");
  }
  return arr1.map((value, index) => {
    if (arr2[index] === 0) {
      throw new Error("Cannot divide by zero");
    }
    return value / arr2[index];
  });
}
