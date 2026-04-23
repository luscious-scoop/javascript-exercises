const getTheTitles = function (array) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    arr.push(array[i].title);
  }
  return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
