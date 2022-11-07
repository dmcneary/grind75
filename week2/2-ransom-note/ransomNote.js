/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	if (magazine.length < ransomNote.length) return false;

	const map = new Map();

	for (const c of magazine) {
		if (map.has(c)) {
			map.set(c, map.get(c) + 1);
		} else {
			map.set(c, 1);
		}
	}

	for (const c of ransomNote) {
		if (map.has(c)) {
			map.set(c, map.get(c) - 1);
		} else {
			map.set(c, -1);
		}
	}

	const vals = map.values();

	for (const c of vals) {
		if (c < 0) return false;
	}

	return true;
};