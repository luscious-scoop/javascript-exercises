const fac = function (n) {
	if (n === 0 || n === 1) {
		return 1;
	}

	return n * fac(n - 1);
};

const permutations = function (
	array,
	value = 0,
	permutation = null,
	newArr = [],
) {
	if (!permutation && permutation !== 0) {
		permutation = fac(array.length);
	}
	if (permutation === 0) {
		return newArr;
	}

	if (!newArr.includes([...array])) {
		newArr.push([...array]);
		if (value + 1 >= array.length) {
			value = 0;
		}
		[array[value], array[value + 1]] = [array[value + 1], array[value]];
	}

	return permutations(array, value + 1, permutation - 1, newArr);
};

//    [1,2]=[[1,2], [2,1]]=

// [1,2,3]= [[1,2,3] , [2,1,3], [3,1,2]. [1,3,2], [2,3,1], [3,2,1]]

console.log(permutations([1, 2, 3, 4]));

// Do not edit below this line
module.exports = permutations;
