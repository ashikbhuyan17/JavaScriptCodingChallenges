// const compose = (...functions) => {
//   console.log('🚀 ~ compose ~ ...functions:', functions[0]);
//   return (input) => {
//     return functions.reduceRight((acc, fn) => {
//       return fn(acc);
//     }, input);
//   };
// };
// const add5 = (x) => x + 5;
// const multiplyBy3 = (x) => x * 3;
// const subtract10 = (x) => x - 10;

// const composedFunction = compose(subtract10, multiplyBy3, add5);
// const result = composedFunction(7);

// console.log(result); // Output: 36

// function composition of any number of functions
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);
const double = (x) => x * 2;
const square = (x) => x * x;

// function composition
var output_final = compose(square, double)(2);
console.log(output_final);
