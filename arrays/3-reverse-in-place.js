/**
 * Reverse the given array in-place
 *
 * @param {number[]} arr
 * @returns {void}
 */
class Solution {
    reverseArray(arr) {
        if (arr.length === 0 || arr.length === 1) {
            return arr;
        }

        for (let i = 0, j = arr.length - 1; i < arr.length/2; i++, j--) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        return arr;
    }
}

const sol = new Solution();
console.log(sol.reverseArray([1, 2, 3, 4, 5])); // 5,4,3,2,1
console.log(sol.reverseArray([1, 2, 3, 4])); // 4,3,2,1
console.log(sol.reverseArray([1])); // 1