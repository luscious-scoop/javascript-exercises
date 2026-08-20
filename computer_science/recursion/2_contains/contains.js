const contains = function (object, value, doesContain = false) {
	let mainObject = object;
	if (Object.values(object).includes(value)) {
		doesContain = true;
		return doesContain;
	} else {
		doesContain = false;
	}

	for (let key in object) {
		if (typeof object[key] === 'object' && !Array.isArray(object[key])) {
			let temp = contains(object[key], value, doesContain);
			if (temp) {
				return true;
			}
		}
	}

	return doesContain;
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

console.log(contains(object, NaN));

// Do not edit below this line
// module.exports = contains;
