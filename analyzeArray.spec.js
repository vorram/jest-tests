const analyzeArray = require("./analyzeArray");

test("returns the object with correctly calculated properties", () => {
  expect(analyzeArray([5, 11, 6, 9, 1, -4])).toEqual({
    average: 5,
    min: -4,
    max: 11,
    length: 6,
  });
});
