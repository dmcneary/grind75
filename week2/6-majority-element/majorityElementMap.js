/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	const map = new Map();
	let max;

	for (const el of nums) {
		if (!map.has(el)) {
			map.set(el, 1);
		}
		else {
			map.set(el, map.get(el) + 1);
		}

		max = (max) ?
			(map.get(el) > map.get(max)) ? el : max :
			el;
	}

	return max;
};