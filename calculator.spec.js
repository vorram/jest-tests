const calculator = require("./calculator");

test("returns the sum of two numbers", () => {
  expect(calculator.add(5, 3)).toBe(8);
});

test("returns the difference of two numbers", () => {
  expect(calculator.subtract(-3, 4)).toBe(-7);
});
test("returns 'ERROR' if the second argument in division is zero", () => {
  expect(calculator.divide(4, 0)).toBe("ERROR");
});
test("returns the quotient of two numbers", () => {
  expect(calculator.divide(20, 4)).toBe(5);
});
test("returns the product of two numbers", () => {
  expect(calculator.multiply(9, 6)).toBe(54);
});
