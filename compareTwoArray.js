// // Javascript compare two arrays and get values that do not match
// var ArrayFileName = ['one', 'two', 'three', 'three', 'five', 'six', 'ten'];
// var ArrayFileNameWExt = [
//   'one.txt',
//   'two.txt',
//   'three.txt',
//   'ten.wmf',
//   'eleven.cgm',
// ];

// var final = ArrayFileNameWExt.filter(function (item) {
//   return ArrayFileName.includes(item.split('.')[0]);
// });

// console.log(final);

// var ArrayFileName = ['one', 'two', 'three', 'three', 'five', 'six', 'ten'];
// var ArrayFileNameWExt = [
//   'one.txt',
//   'two.txt',
//   'three.txt',
//   'ten.wmf',
//   'eleven.cgm',
//   'five.dd',
// ];

// var final = ArrayFileNameWExt.map(function (item) {
//   // Check if the filename without extension exists in ArrayFileName
//   const filename = item.split('.')[0];
//   if (ArrayFileName.includes(filename)) {
//     // Include the original item with extension (modified behavior)
//     return filename;
//   }
// });

// console.log(final);
