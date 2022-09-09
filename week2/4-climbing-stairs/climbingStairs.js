/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) return 1;
    let slow = 1, fast = 2;

    for (let i = 3; i <= n; i++) {
        let temp = slow + fast;
        slow = fast;
        fast = temp;
    }

    return fast;

};