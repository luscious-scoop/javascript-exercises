const removeFromArray = function (array, ...items) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (items[j] === array[i]) {
        array.splice(i, 1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
