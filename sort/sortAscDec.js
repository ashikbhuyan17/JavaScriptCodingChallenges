
// compareFunction	Optional.
// A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments:
// function(a, b){return a-b}
// When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.


//ascending order sort
const array1 = [1, 30, 4, -21, 100000, 0];
array1.sort((a, b) => a - b)
console.log('ascending order sort', array1);

//descending order sort
const array2 = [1, 30, 4, -21, 100000, 0];
array2.sort((a, b) => b - a)
console.log('descending order sort', array2);