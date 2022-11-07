/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
	let sum = 0n;
	sum += BigInt("0b" + a);
	sum += BigInt("0b" + b);
	
	return sum.toString(2);
};