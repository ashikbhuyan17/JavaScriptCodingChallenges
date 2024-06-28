const insertElementLastPosition = (list, newData) => {
    // Add the new element at the end of the array
    list[list.length] = newData;
    return list;
};

//shortest way 
// const insertElementLastPosition = (list, newData) => {
//     list.push(newData);
//     return list;
// };

const list = ["Item 1", "Item 2", "Item 3"];
const newData = "Item 4";
const displayInsertElementLastPosition = insertElementLastPosition(list, newData);
console.log("🚀 insert element last position", displayInsertElementLastPosition);
