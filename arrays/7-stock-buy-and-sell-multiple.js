/**
 * The cost of stock on each day is given in an array price[]. Each day you may decide to either buy or sell the stock i
 * at price[i], you can even buy and sell the stock on the same day. Find the maximum profit that you can get.
 *
 * Note: A stock can only be sold if it has been bought previously and multiple stocks cannot be held on any given day.
 */
class Solution {
    /**
     * @param number[] prices
     * TC: O(n), SC: O(1)
     * @returns number
     */
    maximumProfit(prices) {
        let profit = 0;

        for (let i = 1; i < prices.length; i++) {
            const prev = prices[i - 1];
            const cur = prices[i];

            const priceDiff = cur - prev;
            if (priceDiff > 0) {
                profit += priceDiff
            }
        }

        return profit;
    }
}

const solution = new Solution();
console.log(solution.maximumProfit([100, 180, 260, 310, 40, 535, 695])); // 865
console.log(solution.maximumProfit([4, 2, 2, 2, 4])); // 2