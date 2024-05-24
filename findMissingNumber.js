// function findMissingNumber(arr) {
//   const n = arr.length + 1;
//   console.log('🚀 ~ findMissingNumber ~ n:', n);
//   const total = (n * (n + 1)) / 2;
//   console.log('🚀 ~ findMissingNumber ~ total:', total);
//   const sum = arr.reduce((acc, num) => acc + num, 0);

//   return total - sum;
// }

// const numbers = [1, 2, 3, 5, 6, 7, 8];
// const missingNumber = findMissingNumber(numbers);
// console.log('The missing number is:', missingNumber);


// Function to find the missing number
function findMissing(arr, N) {
  let i;
  let temp = [];
  for (i = 0; i <= N; i++) {
    temp[i] = 0;
  }
  
  for (i = 0; i < N; i++) {
    temp[arr[i] - 1] = 1;
    console.log("🚀 ~ findMissing ~ temp[arr[i] - 1]:", temp[arr[i] - 1])
  }
  
  console.log("🚀 ~ findMissing ~ temp:", temp)
  // let ans = 0;
  // for (i = 0; i <= N; i++) {
  //   if (temp[i] == 0)
  //     ans = i + 1;
  // }
  // console.log(ans);
}

// Driver code
let arr = [1, 3, 7, 5, 6, 2];
let n = arr.length;

// Function call
findMissing(arr, n);