/**
    nums.length - 2 পর্যন্ত লুপ করছি কারণ আমাদের ৩টা এলিমেন্ট লাগবে।

    তোমাকে একটি integer array nums দেওয়া হবে। এর মধ্যে এমন সব triplet বের করতে হবে [nums[i], nums[j], nums[k]] যাতে:
    i != j, j != k, i != k
    এবং তিনটির যোগফল 0 হয়
    একই ট্রিপলেট ডুপ্লিকেট হিসেবে একাধিকবার ফিরিয়ে দেওয়া যাবে না।
 */

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b); // ধাপে 1: অ্যারেটা ছোট থেকে বড় সাজাও
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; //# Skip duplicate fixed element
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum == 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // ডুপ্লিকেট এড়াতে
        //➡️ left পয়েন্টার যদি আগেরটার সমান হয়, তাহলে সেটিও skip করা হচ্ছে (ডুপ্লিকেট ট্রিপলেট এড়ানোর জন্য)।
        while (left < right && nums[left] === nums[left - 1]) left++;
        //➡️ right পয়েন্টার যদি আগেরটার সমান হয়, সেটাও skip করা হচ্ছে।
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

// const nums = [-1, 0, 1, 2, -1, -4];
const nums = [-2, 0, 1, 1, 2];
let result = threeSum(nums);
console.log('🚀 ~ result:', result);
