const fibonacci = function (num) {
  let array = [0, 1, 1, 2, 3, 5, 8, 13]; //[0,1,1,2,3,5,8,13]

  if (num < 0) {
    return "OOPS";
  }

  if (num < array.length) {
    return array[num];
  } else {
    for (let i = array.length - 1; i < num; i++) {
      //7
      result = array[i] + array[i - 1];
      array.push(result);
    }
    return array[array.length - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
