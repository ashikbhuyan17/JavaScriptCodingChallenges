/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
const hasPairWithSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const sum = element + arr[j];
      if (sum == target) {
        console.log(`found pair at indices: [${i}, ${j}]`);
        return [i, j];
      }
    }
    return null;
  }
};
const numbers = [1, 2, 3, 4, 6, 8, 10];
const target = 7;
const result = hasPairWithSum(numbers, target);
console.log(`Pair with sum ${target} exists?`, result ? '✅ Yes' : '❌ No');
