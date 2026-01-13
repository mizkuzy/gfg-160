/**
 * Given an array arr[] that contains positive and negative integers (may contain 0 as well).
 * Find the maximum product that we can get in a subarray of arr[].
 *
 * Note: It is guaranteed that the answer fits in a 32-bit integer.
 */
class Solution {
    /**
     * TC: O(n), SC: O(1)
     * @returns number - the maximum sum of a subarray
     * @param arr
     */
    maxProduct(arr) {
        let curMax = arr[0];
        let curMin = arr[0];
        let maxProduct = arr[0];

        for (let i = 1; i < arr.length; i++) {
            const el = arr[i];
            // For each index, calculate the temporary maximum using max of current value, current × currMax, and current × currMin.
            const tempMax = Math.max(el, el * curMax, el * curMin);
            // Update currMin using min of current value, current × currMax, and current × currMin.
            curMin = Math.min(el, el * curMax, el * curMin);
            // Assign currMax to the previously computed temporary maximum value.
            curMax = tempMax;
            if (curMax > maxProduct) {
                maxProduct = curMax
            }
        }


        return maxProduct
    }
}

const solution = new Solution();
console.log(solution.maxProduct([-2, 6, -3, -10, 0, 2])); // 180: [6, -3, -10]
console.log(solution.maxProduct([-1, -3, -10, 0, 6])); // 30: [-3, -10]
console.log(solution.maxProduct([2, 3, 4])); // 24

