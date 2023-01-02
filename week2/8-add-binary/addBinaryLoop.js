/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function (a, b) {
	let res = 0n;

	res += toInt(a);
	res += toInt(b);

	return res.toString(2)

};

const toInt = s => {
	let sum = 0n;
	for (let i = s.length - 1; i >= 0; i--) {
		if (s[s.length - 1 - i] === "1") sum += BigInt(2 ** i);
	}
	return sum;
}