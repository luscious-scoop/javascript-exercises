const repeatString = function (string, num) {
  let repeatedString = "";
  for (let i = 0; i < num; i++) {
    if (num >= 0) {
      repeatedString += string;
    } else {
      return "ERROR";
    }
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
