const createCounter = function (init) {
  let count = init;
  return {
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
    reset: () => {
      count = init;
      return count;
    },
  };
};

const counter = createCounter(5);
console.log('🚀 ~ counter:', counter);
console.log('🚀 ~ counter.increment(); :', counter.increment());
console.log('🚀 ~ counter.decrement():', counter.decrement());
console.log('🚀 ~ counter.reset():', counter.reset());
