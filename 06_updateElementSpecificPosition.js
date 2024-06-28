const updateElementSpecificPosition = (list, newData, position) => {
    if (position >= 0 && position < list.length) {
        const updatedList = [...list]; // Create a copy of the original array
        updatedList[position] = newData; // Update element at specified position
        return updatedList;
    } else {
        return [...list]; // Return a copy of the original array if position is out of bounds
    }
};

// Example usage:
const list = ["Item 1", "Item 2", "Item 3", "Item 4"];
const newData = "Updated Item";
const position = 2;
const displayUpdatedList = updateElementSpecificPosition(list, newData, position);
console.log("🚀 Updated list:", displayUpdatedList);
