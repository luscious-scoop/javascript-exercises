const removeFromArray = function (array, ...items) {
  let unique = [];
  for (let i = 0; i < array.length; i++) {
    if (!unique.includes(array[i])) {
      unique.push(array[i]);
    }
  }

  for (let i = 0; i < items.length; i++) {
    let index = unique.indexOf(items[i]);
    if (index !== -1) {
      unique.splice(index, 1);
    }
  }
  return unique;
};

// Do not edit below this line
module.exports = removeFromArray;
