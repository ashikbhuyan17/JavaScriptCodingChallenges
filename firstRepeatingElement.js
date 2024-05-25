function firstRepeatingElement(array) {
  let compareElement = [];
  // Nested loop to check for repeating elements
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log('🚀 ~ firstRepeatingElement ~ element:', element);
    for (let j = index + 1; j < array.length; j++) {
      const compareElement = array[j];

      // return firstRepeatingElement
      if (compareElement === element) {
        return index;
      }
      // return  multiple repeating elements
      //   if (compareElement === element) {
      //     compareElement.push(element);
      //   }
    }
  }
  // If no repeating element is found, return -1
  return -1;
}

// Driver code
const arr = [10, 33, 3, 100, 4, 3, 5, 6];
// Finding the index of first repeating element
const index = firstRepeatingElement(arr);
console.log('🚀 ~ index:', index);

// Checking if any repeating element is found or not
if (index === -1) {
  console.log('No repeating element found!');
} else {
  // Printing the first repeating element and its index
  console.log('First repeating element is', arr[index]);
}
