"use strict";
// /**
//   Time and Space Complexity
//   Time: O(n) – Each pointer moves at most n steps.
// */
// const hasPairWithSum = (arr: number[], target: number): boolean => {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     const sum = arr[left] + arr[right];
//     if (sum === target) {
//       return true;
//     } else if (sum < target) {
//       left++; // যোগফল টার্গেট থেকে ছোট হলে বামে থাকা মান বাড়ানোর জন্য পয়েন্টার সামনে নেওয়া হয়
//     } else {
//       right--; // যোগফল টার্গেট থেকে বড় হলে ডানদিকের পয়েন্টার এক ধাপ কমানো হয়
//     }
//   }
//   return false;
// };
// const numbers = [1, 2, 3, 4, 6, 8, 10];
// const target = 7;
// const result = hasPairWithSum(numbers, target);
// console.log(`Pair with sum ${target} exists?`, result ? '✅ Yes' : '❌ No');
