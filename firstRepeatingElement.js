

function firstRepeatingElement(array) {
    // Nested loop to check for repeating elements
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log("🚀 ~ firstRepeatingElement ~ element:", element)
        
    }
    
}
 
// Driver code
const arr = [10, 5, 3, 4, 3, 5, 6];
// Finding the index of first repeating element
const index = firstRepeatingElement(arr);