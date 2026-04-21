const palindromes = function (string) {
  let array = string;
  let index;
  array = array.toLowerCase();
  array = array.trim();
  if (array.includes(",") || array.includes(" ")) {
    array = array.split("");
    for (let i = 0; i < array.length; i++) {
      if (array[i] === ",") {
        array.splice(i, 1);
      }
      if (array[i] === " ") {
        array.splice(i, 1);
      }
    }
  } else {
    array = array.split("");
  }
  if (array.includes(".")) {
    index = array.indexOf(".");
    array.splice(index, 1);
  } else if (array.includes("!")) {
    index = array.indexOf("!");
    array.splice(index, 1);
  }
  let reversed = [...array].reverse();
  array = array.join("");
  reversed = reversed.join("");

  if (array === reversed) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
