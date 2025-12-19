/**
 * Given an array of positive integers arr[], return the second largest element from the array.
 * If the second largest element doesn't exist then return -1.
 *
 * Note: The second largest element should not be equal to the largest element.
 */
class Solution {
    getSecondLargest(arr) {
        // code here
        let largest = -1;
        let secondLargest = -1;

        for (let i = 0; i < arr.length; i++) {
            const curEl = arr[i]
            if (curEl > largest) {
                secondLargest = largest
                largest = curEl
            } else if (curEl !== largest && curEl > secondLargest) {
                secondLargest = curEl
            }
        }

        return secondLargest
    }
}

const sol = new Solution();
console.log(sol.getSecondLargest([1, 1, 1]));
console.log(sol.getSecondLargest([2, 1]));
console.log(sol.getSecondLargest([12, 34, 1, 35, 7, 34]));