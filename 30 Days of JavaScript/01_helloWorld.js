/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    console.log('🚀 ~ args:', args);
    return 'Hello World';
  };
};

const f = createHelloWorld();
console.log('🚀 ~ f:', f());
f(); // "Hello World"
