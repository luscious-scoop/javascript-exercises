const removeFromArray = function (array, ...items) {
  let indices = items;

  for (let i = 0; i < indices.length; i++) {
    let index = array.indexOf(indices[i]);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
