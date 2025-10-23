const originalArray = [1, 2, 2, 3, 4, 4, 5];

/**
 ✅ Time Complexity: O(n²) 
const findDuplicateElements = (arr) => {
	// const uniqueElements = new Set(arr);
	// return Array.from(uniqueElements);
	const duplicates = [];

	for (let i = 0; i < arr.length; i++) {
		const currentElement = arr[i];

		for (let j = i + 1; j < arr.length; j++) {
			const nextElement = arr[j];

			if (currentElement === nextElement) {
				duplicates.push(currentElement);
			}
		}
	}

	return duplicates.length > 0 ? duplicates : null;
};

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log("Duplicates:", findDuplicateElements(numbers));
 */

// use two pointer => ✅ Time Complexity: O(n)
/*
const hasDuplicate = (numbs) => {
	let left = 0;
	let right = 1;
	while (right < numbs.length) {
		let checkDuplicate = numbs[left] === numbs[right];
		if (checkDuplicate) {
			return true;
		} else {
			left++;
			right++;
		}
	}
	return false;
};

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log("Has duplicate:", hasDuplicate(numbers));
*/

// time complexity: O(n²)
const findDuplicateElements = (numbs) => {
	let left = 0;
	let right = 1;
	let duplicates = [];
	while (right < numbs.length) {
		// o(n)
		let checkDuplicate = numbs[left] === numbs[right];
		if (checkDuplicate) {
			// Avoid pushing same duplicate multiple times => o(n)
			if (!duplicates.includes(numbers[left])) {
				duplicates.push(numbers[left]);
			}
		}
		left++;
		right++;
	}
	return duplicates.length > 0 ? duplicates : null;
};

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log("Duplicates:", findDuplicateElements(numbers));
