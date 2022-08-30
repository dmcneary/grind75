/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
	if ((s.length < 2) || (s.length % 2 !== 0)) return false;
	let stack = [];

	for (const c of s) {
		if (c.match(/[({[]/)) {
			switch (c) {
				case "(": stack.push(")"); break;
				case "{": stack.push("}"); break;
				case "[": stack.push("]"); break;
			}
		} else if (!stack.length || stack.pop() !== c) {
			return false;
		}
	}
	return stack.length === 0;
}