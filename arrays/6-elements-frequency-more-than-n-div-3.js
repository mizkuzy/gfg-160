/**
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 *
 * Note: The returned array of majority elements should be sorted.
 */
class Solution {
    /** Max 2 elements can appear more than ⌊ n/3 ⌋ times */
    findMajority(arr) {
        let candidate1 = -1;
        let candidate2 = -1;
        let count1 = 0;
        let count2 = 0;

        // Boyer-Moore Voting Algorithm
        for (const el of arr) {
            // If an element is equal to any candidate, update that candidate's count.
            if (el === candidate1) {
                count1++;
            } else if (el === candidate2) {
                count2++;
            }
            // If count of a candidate reaches zero then replace that candidate with current element.
            else if (count1 === 0) {
                candidate1 = el;
                count1 = 1;
            } else if (count2 === 0) {
                candidate2 = el;
                count2 = 1;
            } // If neither candidate matches and both counts are non zero, decrement the counts.
            else {
                count1--;
                count2--;
            }
        }

        count1 = 0;
        count2 = 0;
        // count frequency of found candidates
        for (const el of arr) {
            if (el === candidate1) {
                count1++;
            } else if (el === candidate2) {
                count2++;
            }
        }

        const requiredFrequency = Math.floor(arr.length / 3)
        const result = []
        // check if the chosen candidates appear more than n/3 times in the array
        if (count1 > requiredFrequency) {
            result.push(candidate1)
        }
        if (count2 > requiredFrequency) {
            result.push(candidate2)
        }

        if (result.length === 2 && result[0] > result[1]) {
            return [result[1], result[0]]
        }

        return result
    }
}

const solution = new Solution();
console.log(solution.findMajority([2, 2, 3, 1, 3, 2, 1, 1])); //  [1, 2]
console.log(solution.findMajority([-5, 3, -5])); //  [-5]
console.log(solution.findMajority([3, 2, 2, 4, 1, 4])); //  []