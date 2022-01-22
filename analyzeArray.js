function analyzeArray(array) {
  const findAverage = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return Math.round(sum / array.length);
  };
  const findMin = (array) => {
    let min = Infinity;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  };
  const findMax = (array) => {
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  };
  return {
    average: findAverage(array),
    min: findMin(array),
    max: findMax(array),
    length: array.length,
  };
}

module.exports = analyzeArray;
