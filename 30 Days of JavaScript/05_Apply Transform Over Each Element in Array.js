var map = function (arr, fn) {
  const transformation = [];
  for (let i = 0; i < arr.length; i++) {
    transformation[i] = fn(arr[i], i);
    console.log(
      '🚀 ~ map ~ transformation[i] = fn(arr[i], i);:',
      (transformation[i] = fn(arr[i], i))
    );
  }
  console.log('🚀 ~ map ~ transformation:', transformation);
  return transformation;
};
let arr = [1, 2, 3];
let fn = function plusone(n) {
  return n + 1;
};

console.log(map(arr, fn)); // Outputs: [2, 3, 4]
