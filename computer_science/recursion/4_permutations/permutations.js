const fac = function (n) {
	if (n === 0 || n === 1) {
		return 1;
	}

	return n * fac(n - 1);
};

const permutations = function (
	array,
	firstValue = 0,
	permutation = null,
	newArr = [],
	secondValue = 1,
) {
	if (!permutation && permutation !== 0) {
		permutation = fac(array.length);
	}
	if (permutation === 0) {
		return newArr;
	}

	if (!newArr.includes([...array])) {
		newArr.push([...array]);

		if (secondValue >= array.length) {
			secondValue = secondValue % array.length;
		}

		[array[firstValue], array[secondValue]] = [
			array[secondValue],
			array[firstValue],
		];
		firstValue = secondValue;
	}

	return permutations(
		array,
		firstValue,
		permutation - 1,
		newArr,
		secondValue + 1,
	);
};

//    [1,2]=[[1,2], [2,1]]=

// [1,2,3]= [[1,2,3] , [2,1,3], [3,1,2]. [1,3,2], [2,3,1], [3,2,1]]

console.log(permutations([1, 2, 3]));

// Do not edit below this line
module.exports = permutations;
