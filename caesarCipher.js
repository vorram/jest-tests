function caesarCipher(string) {
  const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    const oldStringLength = newString.length;
    for (let n = 0; n < alphabetLowerCase.length; n++) {
      if (string.charAt(i) === alphabetLowerCase.charAt(n)) {
        if (alphabetLowerCase.charAt(n) === "z") {
          newString += "a";
        } else {
          newString += alphabetLowerCase.charAt(n + 1);
        }
      } else if (string.charAt(i) === alphabetUpperCase.charAt(n)) {
        if (alphabetUpperCase.charAt(n) === "Z") {
          newString += "A";
        } else {
          newString += alphabetUpperCase.charAt(n + 1);
        }
      }
    }
    if (oldStringLength === newString.length) {
      newString += string.charAt(i);
    }
  }
  return newString;
}

module.exports = caesarCipher;
