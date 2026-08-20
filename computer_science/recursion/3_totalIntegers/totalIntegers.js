const totalIntegers = function (object, count = 0) {
	if (typeof object !== 'object') {
		return undefined;
	}
	const values = Object.values(object);

	values.forEach((item) => {
		if (Number.isInteger(item)) {
			count++;
		} else if (typeof item === 'object' && item !== null) {
			count = totalIntegers(item, count);
		}
	});
	return count;
};

// Do not edit below this line
module.exports = totalIntegers;
