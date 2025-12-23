/**
 * Given an array arr[]. Shift the array to the left (counter-clockwise direction) by d steps, where d is a positive
 * integer. Do the mentioned change in the array in place.
 * @param {number[]} arr
 * @param {number} d
 */
class Solution {
    rotateArr(arr, d) {
        const arrLength = arr.length;
        if (arrLength === 0 || arrLength === 1) {
            return arr;
        }

        // Since shifting by arrLength positions returns array to original state,
        // we only need to shift by the remainder (d % arrLength)
        d = d % arrLength;

        // reverse first part
        this.reverse(0, d, arr)
        // reverse second part
        this.reverse(d, arrLength, arr)
        // reverse all arr
        this.reverse(0, arrLength, arr)

        return arr;
    }

    reverse(start, end, arr) {
        for (let i = start, j = end - 1; i < j; i++, j--) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}



const sol = new Solution();
console.log(sol.rotateArr([1, 2, 3, 4, 5], 2)); // [3, 4, 5, 1, 2]
console.log(sol.rotateArr([1, 2, 3, 4], 2)); // [3, 4, 1, 2]
console.log(sol.rotateArr([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3)); // [8, 10, 12, 14, 16, 18, 20, 2, 4, 6]
console.log(sol.rotateArr([7, 3, 9, 1], 9)); // [3, 9, 1, 7]