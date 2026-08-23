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

	if (!doesContainTheArray(array, newArr)) {
		newArr.push([...array]);

		permutation -= 1;
	} else {
		if (secondValue >= array.length) {
			secondValue = secondValue % array.length;
		}
		[array[firstValue], array[secondValue]] = [
			array[secondValue],
			array[firstValue],
		];

		firstValue = secondValue;
	}

	return permutations(array, firstValue, permutation, newArr, secondValue + 1);
};

//    [1,2]=[[1,2], [2,1]]=

// [1,2,3]= [[1,2,3] , [2,1,3], [3,1,2]. [1,3,2], [2,3,1], [3,2,1]]

console.log(permutations([]));

function doesContainTheArray(array, array2) {
	if (array2.length === 0) {
		return false;
	}
	let doesContain = false;
	for (let i = 0; i < array2.length; i++) {
		for (let j = 0; j < array2[i].length; j++) {
			if (array[j] === array2[i][j]) {
				doesContain = true;
			} else {
				doesContain = false;
				break;
			}
		}
		if (doesContain) {
			return doesContain;
		}
	}

	return doesContain;
}

// Do not edit below this line
module.exports = permutations;
