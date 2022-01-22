function capitalize(string) {
  if (typeof string !== "string") {
    console.error("Error: argument is not a string");
    return undefined;
  } else {
    const firstChar = string.slice(0, 1);
    return `${firstChar.toUpperCase()}${string.slice(1)}`;
  }
}

module.exports = capitalize;
