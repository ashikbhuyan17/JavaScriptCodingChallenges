const insertElementFirstTime = (list, newData) => {
    // Shift elements one position to the right
    for (let index = list.length - 1; index >= 0; index--) {
        list[index + 1] = list[index];
    }
    // Insert new element at the start of the list
    list[0] = newData;
    return list;
};

//========================== shortest way =====================================================
// const insertElementFirstTime = (list, newData) => {
//     list.unshift(newData);
//     return list;
// };
//=============================================================================================

const newData = "Item 1";
const displayInsertElementFirstTime = insertElementFirstTime([ "Item 2", "Item 3", "Item 4"], newData);
console.log("🚀 insert element first position", displayInsertElementFirstTime);
