/**
 * Given an array prices[] of length n, representing the prices of the stocks on different days. The task is to find
 * the maximum profit possible by buying and selling the stocks on different days when at most one transaction is
 * allowed. Here one transaction means 1 buy + 1 Sell. If it is not possible to make a profit then return 0.
 *
 * Note: Stock must be bought before being sold.
 */
class Solution {
    /**
     * TC: O(n), SC: O(1)
     * @returns number - profit
     * @param prices
     */
    maximumProfit(prices) {
        let profit = 0;

        for (let i = 0, j = i + 1; i < j && j < prices.length;) {
            const leftEl = prices[i];
            const rightEl = prices[j];

            if (rightEl > leftEl) {
                const curProfit = rightEl - leftEl;
                if (curProfit > profit) { // inline up
                    profit = curProfit;
                }
                j++
            } else {
                i = j
                j = i + 1
            }
        }

        return profit;
    }
}

const solution = new Solution();
console.log(solution.maximumProfit([6, 9, 5, 3, 2, 6, 6, 4])); // 4
console.log(solution.maximumProfit([7, 10, 1, 3, 6, 9, 2])); // 8
console.log(solution.maximumProfit([7, 6, 4, 3, 1])); // 0
console.log(solution.maximumProfit([1, 3, 6, 9, 11])); // 10