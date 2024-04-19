function findMinMax(array) {
    var min = array[0];
    var max = array[0];

    // for (let i = 1; i < array.length; i++) {
    //     if (array[i] < min)
    //         min = array[i];
    //     else if (array[i] > max)
    //         max = array[i];
    // }
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        if (element > max) {  //check max value
            max = array[index]
        }
        if (element < min) {  //check min value
            min = array[index]
        }

    }
    return { min: min, max: max }
}

const array = [423, 6, 46, 34, 23, 900, 13, 53, 4, 100, 700, 5, 1200];
const { min, max } = findMinMax(array);
console.log(`${min && max ? `min- ${min}, max - ${max}` : 'element not found'} `);


//ECMAScript 6 (ES6)
// function findMinMax(array) {
//     const sortArray = array.sort((a, b) => a - b)
//     console.log("🚀 ~ findMinMax ~ sortArray:", sortArray)
//     return { min: sortArray[0], max: sortArray[sortArray.length - 1] }
// }

// const array = [423, 6, 46, 34, 23, 900, 13, 53, 4, 100, 700, 5, 1200];
// const { min, max } = findMinMax(array);
// console.log(`${min || min === 0 && max ? `min- ${min}, max - ${max}` : 'element not found'} `);


