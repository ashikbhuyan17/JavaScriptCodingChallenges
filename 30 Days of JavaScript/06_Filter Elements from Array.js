var filter = function (arr, fn) {
  const filteredArr = [];
  for (let index = 0; index < arr.length; index++) {
    const a = fn(arr[index], index);
    if (a) {
      filteredArr.push(arr[index]);
    }
  }
  return filteredArr;
};

let arr = [1, 2, 3];
let fn = function firstIndex(n, i) {
  return i === 0;
};

console.log(filter(arr, fn));
