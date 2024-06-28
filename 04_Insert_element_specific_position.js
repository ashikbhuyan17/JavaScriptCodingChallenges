const insertElementSpecificPosition = (list, newData, position) => {
    if (position < 0 || position > list.length) {
        return [...list]; // Return a copy of the original list if position is out of bounds
    }
    if (position <= list.length && position >= 0) {
        // Shift elements to the right
        for (let index = list.length; index > position; index--) {
            list[index] = list[index - 1];
        }
        // Insert new data at the specified position
        list[position] = newData;
        return list;
    }
    return [];
};

const list = ["Item 1", "Item 2", "Item 3", "Item 4"];
const newData = "Insert Element";
const position = 3;
const displayInsertElementSpecificPosition = insertElementSpecificPosition(list, newData, position);
console.log("🚀 Insert element specific position in an Array", displayInsertElementSpecificPosition);
