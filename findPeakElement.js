// // Find a peak element which is not smaller than its neighbours
// // Given an array arr of n elements that is first strictly increasing and then maybe strictly decreasing, find the maximum element in the array.
// const findPeakElement = (arr) => {
//     let n = arr.length

//     // Check if the first element is a peak
//     if (n == 1 || arr[0] >= arr[1]) {
//         console.log('first element is a peak')
//         return arr[0];
//     }

//     // Check if the last element is a peak
//     if (n > 1 && arr[n - 1] >= arr[n - 2]) {
//         console.log('last element is a peak', arr[n - 1])
//         return arr[n - 1]
//     }
//     // Check for peak in the middle of the array
//     for (let i = 1; i < n - 1; i++) {
//         const element = arr[i];
//         if (element >= arr[i + 1]) {
//             return arr[i];
//         }
//     }
//     // If no peak is found
//     return null;
// }
// const arr = [1, 3, 20, 4, 1, 0];
// const peak = findPeakElement(arr);
// if (peak !== null) {
//     console.log("Peak element found:", peak);
// } else {
//     console.log("No peak element found.");
// }

function findPeakElement(arr) {
    const peak = arr.reduce((prevPeak, current, index, array) => {
        // Check if the current element is a peak
        if (
            (index === 0 || current >= array[index - 1]) &&
            (index === array.length - 1 || current >= array[index + 1])
        ) {
            // Return the greater of the current peak or current element
            console.log('________', prevPeak, current)
            return prevPeak === null || current > prevPeak ? current : prevPeak;
        }

        // If not a peak, return the previous peak
        console.log(prevPeak, current)
        return prevPeak;
    }, null);

    return peak !== null ? peak : "No peak element found.";
}

// Example usage
const arr = [1, 3, 20, 4, 1, 0, 600];
const peak = findPeakElement(arr);
console.log("Peak element found:", peak);

