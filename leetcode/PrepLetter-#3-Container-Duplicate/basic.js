/**
    Key-Value pair store করতে হবে => Map বা Object
    Frequency count করতে হবে => Map 
    শুধু unique values চাই => Set
    Duplicate remove করতে হবে => Set 
    Fast lookup চাই => সব ক্ষেত্রেই ভালো
*/

// তৈরি করা
const map = new Map();

// মূল Operations
// map.set(key, value); // ✅ যোগ করা
// map.get(key); // 📖 পড়া
// map.has(key); // ❓ আছে কিনা check
// map.delete(key); // ❌ মুছে ফেলা
// map.clear(); // 🗑️ সব মুছে ফেলা
// map.size; // 📊 কতটি item আছে

// উদাহরণ
const studentMarks = new Map();
studentMarks.set("Rahim", 85);
studentMarks.set("Karim", 90);
studentMarks.set("Suma", 95);
console.log("🚀 ~ studentMarks:", studentMarks);

console.log(studentMarks.get("Rahim")); // 85
console.log(studentMarks.has("Karim")); // true
console.log(studentMarks.size); // 3

// Loop করা
for (let [name, marks] of studentMarks) {
	console.log(`${name}: ${marks}`);
}

//  ===========================   Set (Unique Values Only) ===========================

/**
    শুধু unique values চাই => Set
    Duplicate remove করতে হবে => Set 
 */

// তৈরি করা
const set = new Set();
const value = 3;
// মূল Operations
set.add(value); // ✅ যোগ করা
set.has(value); // ❓ আছে কিনা check
set.delete(value); // ❌ মুছে ফেলা
set.clear(); // 🗑️ সব মুছে ফেলা
set.size; // 📊 কতটি item আছে

// উদাহরণ
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(2); // ⚠️ আবার add হবে না (already আছে)
numbers.add(3);

console.log(numbers); // Set {1, 2, 3}
console.log(numbers.has(2)); // true
console.log(numbers.size); // 3

// Array থেকে duplicate বাদ দেওয়া
const arr = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4]

// ==================== Object (সাধারণ Key-Value) ====================

/**
    Key-Value pair store করতে হবে => Map বা Object
    Fast lookup চাই => সব ক্ষেত্রেই ভালো
 */

// তৈরি করা
const obj = {};

// মূল Operations
obj[key] = value; // ✅ যোগ করা
obj.key = value; // ✅ যোগ করা (dot notation)
obj[key]; // 📖 পড়া
key in obj; // ❓ আছে কিনা check
delete obj[key]; // ❌ মুছে ফেলা

// উদাহরণ
const person = {};
person["name"] = "Rahim";
person.age = 25;
person["city"] = "Dhaka";

console.log(person.name); // "Rahim"
console.log("age" in person); // true
