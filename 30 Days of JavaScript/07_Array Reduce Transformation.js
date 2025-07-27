var reduce = function (nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};

let nums = [1, 2, 3, 4];
// let fn = function sum(accum, curr) {
//   return accum + curr;
// };
let fn = function sum(accum, curr) {
  return accum + curr * curr;
};
let init = 100;
console.log(reduce(nums, fn, init));

// ================================================================= Code In TypeScript Implementation =================================================================
// type Reducer<T, U> = (acc: T, curr: U) => T;

// function reduce<T, U>(nums: U[], fn: Reducer<T, U>, init: T): T {
//   let val: T = init;
//   for (let i = 0; i < nums.length; i++) {
//     val = fn(val, nums[i]);
//   }
//   return val;
// }
