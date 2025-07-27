## Two Pointers:

### What is the Two Pointers Technique?
```
Two Pointers Technique হল একটি অ্যালগরিদমিক কৌশল যেখানে আপনি একসাথে দুইটি ইনডেক্স (পয়েন্টার) ব্যবহার করেন। 
সাধারণত, আপনি শুরুতে একটি পয়েন্টার এবং শেষে আরেকটি পয়েন্টার সেট করবেন, সমস্যার প্রয়োজনীয়তার উপর নির্ভর করে এগুলি একে অপরের দিকে সরানো হয় ।

কিভাবে কাজ করে?
- একটি পয়েন্টার থাকে শুরুর দিকে (left/start),
- আরেকটি থাকে শেষের দিকে (right/end),
- তারপর এই দুইটি পয়েন্টারকে সমস্যার প্রয়োজনে একই দিকে বা বিপরীত দিকে সরানো হয়।
```


```
Why Use Two Pointers?
• Efficiency: It can reduce your algorithm from O(n^2) to O(n) or O(n^2) from O(n^3).
• Ideal For: Sorted arrays and problems involving sums, subarrays, or searching for relationships between elements.
• Nested loop বাদ দিয়ে একবারেই পুরো ডেটা efficiently প্রসেস করা যায়।
```
## Two Pointers Technique Example in TypeScript

```
Time and Space Complexity
• Time: O(n) – Each pointer moves at most n steps.

const hasPairWithSum = (arr: number[], target: number): boolean => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return true; // ✅ Found a matching pair
    } else if (sum < target) {
      left++; // 🔼 Increase the sum
    } else {
      right--; // 🔽 Decrease the sum
    }
  }

  return false; // ❌ No pair found
};

// 🔍 Example usage:
const numbers = [1, 2, 3, 4, 6, 8, 10]; // Must be sorted
const target = 10;

const result = hasPairWithSum(numbers, target);

console.log(`Pair with sum ${target} exists?`, result ? '✅ Yes' : '❌ No');
```