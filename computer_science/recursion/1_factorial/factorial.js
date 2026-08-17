const factorial = function (n) {
	if (
		typeof n === 'string' ||
		Number.isInteger(n) === false ||
		Array.isArray(n) ||
		n < 0
	) {
		return;
	}
	if (n === 0) {
		return 1;
	}

	return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;
