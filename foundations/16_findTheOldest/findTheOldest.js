const findTheOldest = function (arrayOfPeople) {
  let age = [];

  for (let i = 0; i < arrayOfPeople.length; i++) {
    if (arrayOfPeople[i].yearOfDeath === undefined) {
      arrayOfPeople[i].yearOfDeath = new Date().getFullYear();
    }
    age.push(arrayOfPeople[i].yearOfDeath - arrayOfPeople[i].yearOfBirth);
  }
  let max = Math.max(...age);
  let index = age.indexOf(max);
  return arrayOfPeople[index];
};

// Do not edit below this line
module.exports = findTheOldest;
