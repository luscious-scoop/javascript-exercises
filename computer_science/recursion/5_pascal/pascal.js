const pascal = function (n, results = [1], index = 0, valueToAdd = 0) {
	if (n === 1) {
		return results;
	}
	valueToAdd = results[index] + valueToAdd;

	results.splice(index, 0, valueToAdd);

	return pascal(n - 1, results, index + 1, valueToAdd);
};

console.log(pascal(4));

// Do not edit below this line
module.exports = pascal;
