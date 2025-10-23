// Find Any Duplicate
// const hasDuplicate = (arr) => {};
// console.log(hasDuplicate([1, 2, 3, 4])); // false
// console.log(hasDuplicate([1, 2, 3, 1])); // true

// const myMap = new Map();
// myMap.set("name", "GFG");
// myMap.set("age", 25);
// myMap.set(1, "One");

// console.log(myMap);
// console.log([myMap]);
// console.log([...myMap]);
// const arrayOfObjects = [...myMap].map(([key, value]) => ({ key, value }));

// console.log(arrayOfObjects);

const myMap = new Map();
// একটি নতুন Map অবজেক্ট তৈরি করা হলো।

myMap.set("name", "GFG");
myMap.set("age", 25);
myMap.set(1, "One");
// Map-এ একটি key-value pair সেট করা হলো। (Key: "name", Value: "GFG")

// --- আউটপুট ১ ---
console.log(myMap);
// Map অবজেক্টটি সরাসরি প্রিন্ট করা হচ্ছে।

// আউটপুট: Map(3) { 'name' => 'GFG', 'age' => 25, 1 => 'One' }
// ব্যাখ্যা: এটি Map অবজেক্টটির অভ্যন্তরীণ গঠন দেখায়, যেখানে key ও value গুলি `=>` দিয়ে আলাদা করা।

// --- আউটপুট ২ ---
console.log([myMap]);
// Map অবজেক্টটিকে একটি নতুন Array-এর মধ্যে রাখা হচ্ছে এবং সেই Array-টি প্রিন্ট করা হচ্ছে।

// আউটপুট: [ Map(3) { 'name' => 'GFG', 'age' => 25, 1 => 'One' } ]
// ব্যাখ্যা: এটি একটি Array যার মধ্যে শুধুমাত্র একটি উপাদান আছে, আর সেটি হলো আপনার তৈরি করা Map অবজেক্ট।

// --- আউটপুট ৩ ---
console.log([...myMap]);
// Map অবজেক্টের উপর Spread Operator (...) ব্যবহার করা হচ্ছে। Map যেহেতু এক ধরণের iterable,
// তাই Spread Operator এটিকে [key, value] আকারের Array-এর একটি নতুন Array-তে পরিণত করে।

// আউটপুট: [ [ 'name', 'GFG' ], [ 'age', 25 ], [ 1, 'One' ] ]
// ব্যাখ্যা: এটি একটি Array of Arrays, যেখানে প্রতিটি ভিতরের Array একটি key ও value নিয়ে গঠিত।

// --- অ্যারে তৈরি ---
const arrayOfObjects = [...myMap].map(([key, value]) => ({
	lable: key,
	value: value,
}));

const arrayOfObjects1 = [...myMap].map(([key, value]) =>
	console.log("=====", key, value)
);
/*
১. [...myMap] দিয়ে Map-টিকে [ [key, value], ... ] আকারে একটি Array-তে রূপান্তর করা হলো।
২. তারপর .map() ব্যবহার করে ঐ Array-এর প্রতিটি [key, value] জুটিকে নতুন Object-এ ({ key: value }) রূপান্তর করা হলো।
*/

// --- আউটপুট ৪ ---
console.log(arrayOfObjects);
// Array of Objects-টি প্রিন্ট করা হচ্ছে।

// আউটপুট: [ { key: 'name', value: 'GFG' }, { key: 'age', value: 25 }, { key: 1, value: 'One' } ]
// ব্যাখ্যা: এটি একটি Array যার প্রতিটি উপাদান হলো একটি Object, যেখানে Map-এর key-টি `key` property এবং value-টি `value` property হিসেবে আছে।
