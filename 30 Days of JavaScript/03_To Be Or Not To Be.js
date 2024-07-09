function expect(val) {
  return {
    toBe: function (expected) {
      if (val !== expected) {
        throw new Error(`Expected ${val} to be ${expected}`);
      }
    },
  };
}

function expect(val) {
  return {
    toBe: function (expected) {
      if (val !== expected) throw new Error('Not Equal');
      else return true;
    },
    notToBe: function (expected) {
      if (val !== expected) {
        return true;
      } else {
        throw new Error('Equal');
      }
    },
  };
}
const toBe = expect(5).toBe(5); // true
console.log('🚀 ~ toBe:', toBe);
const notToBe = expect(5).notToBe(5);
console.log('🚀 ~ notToBe:', notToBe);
