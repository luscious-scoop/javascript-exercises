const sumAll = function (...args) {
  let newArray = [...args];
  let min = null;
  let max = null;
  if (newArray[0] > newArray[1]) {
    max = newArray[0];
    min = newArray[1];
  } else {
    max = newArray[1];
    min = newArray[0];
  }

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
