/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	const set = new Set();
	let count = 0;

	for (const c of s) {
		if (set.has(c)) {
			count++;
			set.delete(c);
		} else set.add(c);
	}

	return (set.size === 0) ? count * 2 : (count * 2) + 1;
};