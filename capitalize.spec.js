const capitalize = require("./capitalize");

test("returns undefined if the argument is not a string", () => {
  expect(capitalize(123)).toBe(undefined);
});

test("returns the string with the first character capitalized", () => {
  expect(capitalize("banang!")).toBe("Banang!");
});
