/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
	if (intervals.length === 0) return [newInterval];

	let sorted = false, i = 0;

	while (!sorted) {
			if (i === intervals.length) {
					intervals.push(newInterval);
					sorted = true;
			} else if (newInterval[0] < intervals[i][0]) {
					intervals.splice(i, 0, newInterval);
					sorted = true;
			} else i++;
	}

	let length = intervals.length;

	for (let i = 0; i < length; i++) {
			if ((i < length - 1) && (intervals[i][1] >= intervals[i + 1][0])) {
					if (intervals[i][1] < intervals[i + 1][1]) {
							intervals[i][1] = intervals[i + 1][1];
					}
					intervals.splice(i + 1, 1);
					length = intervals.length;
					i--;
			}
	}

	return intervals;
};