/**
    🔍 Time Complexity
    * Outer loop runs n times → O(n)
    * Inner loop runs up to n - 1 times in worst case → also up to O(n)
    * So total = O(n²) (quadratic time)
    👉 When nums.length = 10^5, your function may run up to 10^10 comparisons, which is too slow and will time out in most 
    competitive coding environments.

*/

function containsDuplicate(nums) {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    for (let j = index + 1; j < nums.length; j++) {
      if (element === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

const nums = [1, 2, 3, 4];
const result = containsDuplicate(nums);
console.log('🚀 ~ result:', result);
