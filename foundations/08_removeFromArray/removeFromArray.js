const removeFromArray = function (array, ...items) {
  let unique = [];
  for (let i = 0; i < array.length; i++) {
    if (!items.includes(array[i])) {
      unique.push(array[i]);
    }
  }
  return unique;
};

// Do not edit below this line
module.exports = removeFromArray;
