import {
  add,
  subtract,
  multiply,
  divide,
  exponentiate,
  squareRoot,
  modulus,
  factorial,
} from "../src/index";

test("Addition works", () => {
  expect(add(2, 3)).toBe(5);
});

test("Subtraction works", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("Multiplication works", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("Division works", () => {
  expect(divide(6, 3)).toBe(2);
});

test("Exponentiation works", () => {
  expect(exponentiate(2, 3)).toBe(8);
});

test("Square Root works", () => {
  expect(squareRoot(9)).toBe(3);
});

test("Modulus works", () => {
  expect(modulus(10, 3)).toBe(1);
});

test("Factorial works", () => {
  expect(factorial(5)).toBe(120);
});
