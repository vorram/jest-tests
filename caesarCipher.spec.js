const caesarCipher = require("./caesarCipher");

test("returns the encrypted string", () => {
  expect(caesarCipher("apple")).toBe("bqqmf");
});

test("returns the encrypted string while wrapping 'z' to 'a'", () => {
  expect(caesarCipher("zombie")).toBe("apncjf");
});
test("works with punctuation", () => {
  expect(caesarCipher("Bananas, pineapples, oranges and grapes.")).toBe(
    "Cbobobt, qjofbqqmft, psbohft boe hsbqft."
  );
});
test("preserves upper case letters", () => {
  expect(caesarCipher("The United States of America")).toBe(
    "Uif Vojufe Tubuft pg Bnfsjdb"
  );
});
