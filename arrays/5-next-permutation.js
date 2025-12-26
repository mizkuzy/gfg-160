/**
 * Given an array of integers arr[] representing a permutation, implement the next permutation that rearranges the
 * numbers into the lexicographically next greater permutation. If no such permutation exists, rearrange the numbers
 * into the lowest possible order (i.e., sorted in ascending order).
 *
 * Note:  A permutation of an array of integers refers to a specific arrangement of its elements in a sequence or linear order.
 * @param {Number[]} arr
 */
class Solution {
    nextPermutation(arr) {
        // first number from the right when numbers stop decrease
        let pivot;
        let piVotIndex;

        for (let i = arr.length - 1; i > 0; i--) {
            const numRight = arr[i];
            const numLeft = arr[i - 1];

            if (numRight > numLeft) {
                pivot = numLeft
                piVotIndex = i - 1;
                break
            }
        }

        console.log('pivot=', pivot);

        // next great permutation doesn't exist so reverse arr
        if (pivot === undefined) {
            this.reverse(0, arr.length, arr);
            return arr;
        }

        // find the lowest number but more than pivot number to the right from pivot
        let elToSwapWithPivot;
        let elIndexToSwapWithPivot;
        for (let i = arr.length - 1; i > piVotIndex; i--) {
            const num = arr[i];
            if (num > pivot) {
                elToSwapWithPivot = num;
                elIndexToSwapWithPivot = i;
                break;
            }
        }

        console.log('lowest=', elToSwapWithPivot);

        // swap elements
        arr[piVotIndex] = elToSwapWithPivot;
        arr[elIndexToSwapWithPivot] = pivot;

        console.log('swapped=', arr);

        this.reverse(piVotIndex + 1, arr.length, arr);

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
console.log(sol.nextPermutation([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(sol.nextPermutation([8, 3, 10, 13, 14, 12, 15, 5, 5, 12, 0, 8, 8])); // [8, 3, 10, 13, 14, 12, 15, 5, 5, 12, 8, 0, 8]
console.log(sol.nextPermutation([1, 4, 3, 2])); // [2,1,3,4]
console.log(sol.nextPermutation([2, 4, 1, 7])); // [2, 4, 7, 1]
console.log(sol.nextPermutation([2, 4, 1, 7, 5, 0])); // [2, 4, 5, 0, 1, 7]
console.log(sol.nextPermutation([3, 2, 1])); // [1,2,3]
console.log(sol.nextPermutation([3, 4, 2, 5, 1])); // [3, 4, 5, 1, 2]