const pascal = function (
	n,
	results = [1],
	sampleArray = [0, 1, 0],
	index = 0,
	secondIndex = 1,
) {
	if (n === 1) {
		return results;
	}

	let valueToAdd = sampleArray[index] + sampleArray[secondIndex];
	results.splice(secondIndex, 0, valueToAdd);

	sampleArray = [...results];
	let temp = index;
	index = secondIndex;
	secondIndex = temp;
	results.splice(secondIndex, 1, valueToAdd);

	return pascal(n - 1, results, sampleArray, index, secondIndex + 1);
};

// [1]= [1,1]

console.log(pascal(5));

// Do not edit below this line
module.exports = pascal;
