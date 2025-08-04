"use strict";
/**
  Time and Space Complexity
  Time: O(n) – Each pointer moves at most n steps.
*/
function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }
    return [];
}
// const numbersArr = [2, 7, 11, 15];
const numbersArr = [-1, 0];
const targetValue = -1;
const output = twoSum(numbersArr, targetValue);
console.log('🚀 ~ output:', output);
