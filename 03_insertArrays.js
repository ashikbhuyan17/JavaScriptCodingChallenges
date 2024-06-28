// Insert arrays into another array

const insertArrays = (targetArray, sourceArray) => {
    for (let index = 0; index < sourceArray.length; index++) {
        console.log(targetArray)
        targetArray[targetArray.length] = sourceArray[index]
    }
    return targetArray
}

//========================== shortest way =====================================================
// const insertArrays = (targetArray, sourceArray) => {
//     return [...targetArray, ...sourceArray];
// };
//=============================================================================================

const targetArray = ["Item 1", "Item 2", "Item 3"];
const sourceArray = ["Item 4", "Item 5"];
const resultArray = insertArrays(targetArray, sourceArray);
console.log("🚀 Combined array:", resultArray);
