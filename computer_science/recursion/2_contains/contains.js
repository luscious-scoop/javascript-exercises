const contains = function (object, value) {
	if (object) {
		if (Object.values(object).includes(value)) {
			return true;
		}
	}
	let isValue;
	for (let key in object) {
		if (
			typeof object[key] === 'object' &&
			!Array.isArray(object[key] && !object[key])
		) {
			isValue = contains(object[key], value);
			if (isValue) {
				return true;
			}
		}
	}

	return false;
};

// Do not edit below this line
module.exports = contains;
