# Insert Interval
Source: [Leetcode](https://leetcode.com/problems/insert-interval/)

## Description
You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` represent the start and the end of the `ith` interval and `intervals` is sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `starti` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return `intervals` _after the insertion_.

**Example 1:**  
Input: `intervals = [[1,3],[6,9]], newInterval = [2,5]`  
Output: `[[1,5],[6,9]]`  

**Example 2:**  
Input: `intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]`  
Output: `[[1,2],[3,10],[12,16]]`  
Explanation: The new interval `[4,8]` overlaps with `[3,5],[6,7],[8,10]`.

**Constraints:**
-   0 <= `intervals.length` <= 10^4
-   `intervals[i].length` = 2
-   0 <= `start[i]` <= `end[i]` <= 10^5
-   `intervals` is sorted by `start[i]` in **ascending** order.
-   `newInterval.length` = 2
-   0 <= `start` <= `end` <= 10^5


## Explanation
First, insert the `newInterval` into `intervals` - the `newInterval` can either be appended and then `intervals` is sorted, or `intervals` may be traversed until the correct index for `newInterval` is found and `newInterval` is inserted using `Array.splice()`.

Then, merge any overlapping intervals in-place and return `intervals` this is performed by comparing adjacent elements and checking if there is an overlap; if so, `Array.splice()` is used once more to delete the redundant element:

```javascript
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
```