const contains = function (object, value) {
	let mainObject = object;
	if (Object.values(object).indexOf(value) > -1) {
		return true;
	}

	for (let key in object) {
		if (
			typeof object[key] === 'object' &&
			!Array.isArray(object[key]) &&
			object[key] !== null
		) {
			contains(object[key], value);
		} else if (object[key] === value) {
			return true;
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

console.log(contains(object, 44));

// Do not edit below this line
// module.exports = contains;
