/**
 * You are given an integer array arr[]. You need to find the maximum sum of a subarray (containing at least one element) in the array arr[].
 *
 * Note : A subarray is a continuous part of an array.
 */
class Solution {
    /**
     * TC: O(n), SC: O(1)
     * @returns number - the maximum sum of a subarray
     * @param arr
     */
    maxSubarraySum(arr) {
        let sum = 0;
        let maxSum = arr[0];

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (sum > maxSum) {
                maxSum = sum;
            }
            if (sum < 0) {
                sum = 0
            }
        }

        return maxSum;
    }
}

const solution = new Solution();
console.log(solution.maxSubarraySum([-1, 25, 25, 18, 18, 2, -8, 6, -17, 20, 8])); // 97
console.log(solution.maxSubarraySum([2, 3, -8, 7, -1, 2, 3])); // 11
console.log(solution.maxSubarraySum([-2, -4])); // -2

