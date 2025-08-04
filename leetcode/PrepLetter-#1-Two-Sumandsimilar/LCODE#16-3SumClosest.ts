function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    // Set pointers:
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];
      //  If this sum is closer to target than previous closest, update it
      if (Math.abs(target - total) < Math.abs(target - closestSum)) {
        closestSum = total;
      }
      if (total < target) {
        left += 1;
      } else if (total > target) {
        // right -= 1;
        right--;
      } else {
        // If exactly equal, this is the best possible
        return total;
      }
    }
  }
  return closestSum;
}

const numArr = [0, 0, 0];
const target = 1;
let resultClosest = threeSumClosest(numArr, target);
console.log('🚀 ~ result:', resultClosest);
