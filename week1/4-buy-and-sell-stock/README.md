# Merge Two Sorted Lists
Source: [Leetcode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## Description
You are given an array prices where `prices[i]` is the price of a given stock on the `i`th day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day** in the future to sell that stock.

*Return the maximum profit you can achieve from this transaction.* If you cannot achieve any profit, return 0.

**Example 1:**

Input: `prices = [7,1,5,3,6,4]`
Output: `5`
Explanation: Buy on day 2 (`price = 1`) and sell on day 5 (`price = 6`), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

**Example 2:**
Input: `prices = [7,6,4,3,1]`
Output: `0`
Explanation: In this case, no transactions are done and the max profit = 0.

**Constraints:**
- 1 <= `prices.length` <= 10^5
- 0 <= `prices[i]` <= 10^4

## Explanation
We can accomplish this task by using a two-pointer approach - one for the 'buy' element and one for the 'sell' element. We'll declare two pointers called `sell` and `buy`, initializing each to 0 and 1, respectively. We also initialize a variable called `profit` to 0 as requested in the description. Then, we iterate through the `prices` array, and compare the elements at indexes `buy` and `sell`. If `prices[buy]` is greater than `prices[sell]`, then there isn't any way we can make a profit and we advance `buy` to the value of `sell`. Otherwise, if `prices[buy]` is less than `prices[sell]` we can compute the difference to get the potential profit between the two. We can compare and assign against the current profit in one instruction by calling `Math.max()` with the current profit and the difference as arguments, and assign the result to `profit`. Finally, we advance `sell` by one. Once we've finished iterating through the list, we return `profit`:
```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = 0, sell = 1, profit = 0;
    
  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      let diff = prices[sell] - prices[buy];
      profit = Math.max(diff, profit);
    } else {
      buy = sell;
    }
        
    sell++;
  }
    
  return profit;
};
```