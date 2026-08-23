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
		} else {
			[array[firstValue], array[secondValue]] = [
				array[secondValue],
				array[firstValue],
			];
			firstValue = secondValue;
		}
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

// console.log(permutations([1, 2, 3]));

function doesContainTheArray(array, array2) {
	let doesContain = false;
	for (let i = 0; i < array2.length; i++) {
		for (let j = 0; j < array2[i].length; j++) {
			if (array[j] !== array2[i][j]) {
				doesContain = false;
			} else {
				doesContain = true;
			}
		}
		if (doesContain) {
			return doesContain;
		}
	}

	return true;
}

let array = [1, 2, 3];

let array2 = [
	[1, 4, 3],
	[9, 5, 6],
	[1, 2, 3],
];

console.log(doesContainTheArray(array, array2));

// Do not edit below this line
// module.exports = permutations;
