/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	const n = nums.length;
	let max = Number.MIN_SAFE_INTEGER, sum = 0;

	for (let i = 0; i < n; i++) {
		sum += nums[i];
		max = Math.max(sum, max);
		if (sum < 0) sum = 0;
	}

	return max;

};