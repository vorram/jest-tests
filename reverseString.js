function reverseString(string) {
  if (typeof string !== "string") {
    console.error("Error: argument is not a string");
    return undefined;
  } else {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
      newString += string.charAt(i);
    }
    return newString;
  }
}

module.exports = reverseString;
