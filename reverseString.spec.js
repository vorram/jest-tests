const reverseString = require("./reverseString");

test("returns undefined if the argument is not a string", () => {
  expect(reverseString(123)).toBe(undefined);
});

test("returns the reversed string", () => {
  expect(reverseString("Banang!")).toBe("!gnanaB");
});
