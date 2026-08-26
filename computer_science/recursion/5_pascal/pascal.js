const pascal = function (n) {
	if (n === 1) {
		return [1];
	}
	let oldRow = pascal(n - 1);
	let newRow = [];

	let value = 0;

	for (let i = 0; i < oldRow.length; i++) {
		value = oldRow[i - 1] !== undefined ? oldRow[i - 1] : 0;

		newRow.push(oldRow[i] + value);

		if (i === oldRow.length - 1) {
			newRow.push(oldRow[i]);
		}
	}

	return newRow;
};

// [1]= [1,1]

console.log(pascal(3));

// Do not edit below this line
module.exports = pascal;
