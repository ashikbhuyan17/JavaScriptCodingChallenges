function createCounter(n) {
  return function () {
    return n++;
    /*
        let result = n; // Store the current value of `n` in a variable `result`
        n++; // Increment the value of `n` for the next call to the function
        return result; // Return the stored value of `n` from the current call
    */
  };
}

const n = 10;
const counter = createCounter(10);
console.log('🚀 ~ counter:', counter());
console.log('🚀 ~ counter:', counter());
console.log('🚀 ~ counter:', counter());

/* 
    Post-increment (n++):
    Post-increment is like saying, "Use the current value of n, and after you've used it, increase it by 1." For example, if you have n = 5, 
    and you write x = n++, 
    what happens? x gets the current value of n (which is 5), and then, as a polite gesture, n increases to 6.
    
    Pre-increment (++n):
    Pre-increment, on the other hand, is more direct. It's like saying, "Increase the value of n by 1 first, and then use the new value."
    Suppose n = 5. If you write x = ++n, this time, n becomes 6 immediately, and x receives that new value. So, x gets 6, and n is also 6.
*/

// Using an ES6 class:
class Counter {
  constructor(start) {
    this.count = start;
  }
  next() {
    return this.count++;
  }
}

const classCounter = new Counter(10);
console.log(classCounter.next()); // 10
console.log(classCounter.next()); // 11
console.log(classCounter.next()); // 12
