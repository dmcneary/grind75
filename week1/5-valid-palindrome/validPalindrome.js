/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	let left = 0, right = str.length - 1;
	while (left < right) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}
	return true;
};