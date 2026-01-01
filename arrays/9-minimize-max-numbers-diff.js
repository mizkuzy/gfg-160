/**
 * Given an array arr[] representing the heights of towers and a positive integer k, we can modify each tower’s height
 * exactly once by either adding k or subtracting k. After these modifications, find the minimum possible difference
 * between the tallest and the shortest tower.
 *
 * Note: It is compulsory to increase or decrease the height by k for each tower. After the operation, the resultant
 * array should not contain any negative integers.
 */
class Solution {
    /**
     * TC: O(n), SC: O(1)
     * @returns number - min height
     * @param arr
     * @param k
     */
    getMinDiff(arr, k) {
        const arrLength = arr.length;
        arr.sort((a, b) => a - b);
        let res = arr[arrLength - 1] - arr[0];

        // For all indices i, increment arr[0...i-1]
        // by k and decrement arr[i...n-1] by k
        for (let i = 1; i < arr.length; i++) {

            // Impossible to decrement height of ith tower by k, continue
            if (arr[i] - k < 0)
                continue;
            let minH = Math.min(arr[0] + k, arr[i] - k);

            let maxH = Math.max(arr[i - 1] + k, arr[arrLength - 1] - k);
            res = Math.min(res, maxH - minH);
        }
        return res;
    }
}

const solution = new Solution();
console.log(solution.getMinDiff([1, 8, 10, 6, 4, 6, 9, 1], 7)); // 5
console.log(solution.getMinDiff([1, 5, 8, 10], 2)); // 5
console.log(solution.getMinDiff([3, 9, 12, 16, 20], 3)); // 11

