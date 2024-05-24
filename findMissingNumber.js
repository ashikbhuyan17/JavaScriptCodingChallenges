function findMissingNumber(arr) {
  const n = arr.length + 1;
  console.log('🚀 ~ findMissingNumber ~ n:', n);
  const total = (n * (n + 1)) / 2;
  console.log('🚀 ~ findMissingNumber ~ total:', total);
  const sum = arr.reduce((acc, num) => acc + num, 0);

  return total - sum;
}

const numbers = [1, 2, 3, 5, 6, 7, 8];
const missingNumber = findMissingNumber(numbers);
console.log('The missing number is:', missingNumber);
