const totalIntegers = function (object, count = 0, n = 1) {
	const values = Object.values(object);

	values.forEach((item) => {
		if (Number.isInteger(item)) {
			count++;
		} else if (typeof item === 'object' && item !== null) {
			count = totalIntegers(item, count, n + 1);
		}
	});
	return count;
};

console.log(totalIntegers([4, 6, { a: 1, b: { a: [5, 10], b: 11 } }, 9]));

// Do not edit below this line
module.exports = totalIntegers;
