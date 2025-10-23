// =============================== Find Any Duplicate =================

/**
  1. check value exist or not  if exist return true
  2. if not exit add it in set 
 */

const hasDuplicate = (arr) => {
	const seen = new Set();
	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		if (seen.has(element)) return true;
		seen.add(element);
	}
	return false;
};

console.log(hasDuplicate([1, 2, 3, 4])); // false
console.log(hasDuplicate([1, 2, 3, 1])); // true

const findDuplicateElements = (arr) => {
	const seen = new Set();
	let duplicates = [];
	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		if (seen.has(element)) duplicates.push(element);
		seen.add(element);
	}
	return duplicates.length > 0 ? duplicates : null;
};

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log("🚀 ~ numbers:", findDuplicateElements(numbers));
