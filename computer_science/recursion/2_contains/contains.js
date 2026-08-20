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

const meaningOfLifeArray = [42];
const object = {
	data: {
		duplicate: 'e',
		stuff: {
			thing: {
				banana: NaN,
				moreStuff: {
					something: 'foo',
					answer: meaningOfLifeArray,
				},
			},
		},
		info: {
			duplicate: 'e',
			magicNumber: 44,
			empty: null,
		},
	},
};

console.log(contains(object, 'bar'));

// Do not edit below this line
module.exports = contains;
