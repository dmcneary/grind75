/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	nums.sort((a, b) => a - b);
	const n = Math.floor(nums.length / 2);
	return nums[n];
}