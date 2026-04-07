const sumAll = function (...args) {
  let min = Math.min(...args);
  let max = Math.max(...args);
  let sum = 0;
  if (
    min < 0 ||
    !Number.isInteger(min) ||
    !Number.isInteger(max) ||
    !typeof min === "number" ||
    !typeof max === "number"
  ) {
    return "ERROR";
  }
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
