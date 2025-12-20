/**
 * You are given an array arr[] of non-negative integers. You have to move all the zeros in the array to the right end
 * while maintaining the relative order of the non-zero elements. The operation must be performed in place, meaning you
 * should not use extra space for another array.
 */
class Solution {
    pushZerosToEnd(arr) {
        let nonZeroElementIndex = 0;

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (element !== 0) {
                const swap = arr[nonZeroElementIndex];
                if (swap !== element) {
                    arr[nonZeroElementIndex] = element;
                    arr[i] = swap;
                }
                nonZeroElementIndex++;
            }
        }

        return arr
    }
}

const sol = new Solution();
console.log(sol.pushZerosToEnd([0, 0, 1, 1, 1]));
console.log(sol.pushZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]));
console.log(sol.pushZerosToEnd([10, 20, 30]));
console.log(sol.pushZerosToEnd([0, 0, 0]));