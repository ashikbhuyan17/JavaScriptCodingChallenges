function containsDuplicate(nums) {
	const set = new Set();
	for (const element of nums) {
		console.log("🚀 ~ containsDuplicate ~ element:", element);
		if (set.has(element)) return true;
		set.add(element);
	}
	return false;
}
let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log("🚀 ~ nums:", containsDuplicate(nums));
