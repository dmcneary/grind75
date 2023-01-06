/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	const set = new Set();
	
	for (const num of nums) {
			set.add(num);
	}

	return nums.length !== set.size;
};