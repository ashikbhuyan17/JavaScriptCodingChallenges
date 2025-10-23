npx tsc --init
npx tsc
node hasPairWithSum.js

Hash Map Approach (for unsorted input)
Two pointer(for sorted input)


হ্যাশিং প্যাটার্ন হলো একটি problem-solving technique যেখানে আমরা Hash Map/Hash Table/HashSet ব্যবহার করে দ্রুত data lookup , duplicate খুঁজে বের করে এবং frequency counting করি। এটি O(1) average time complexity তে data store এবং retrieve করতে পারে।
কখন ব্যবহার করবেন? (When to Use)

যখন আপনাকে frequency/count track করতে হবে
যখন duplicate খুঁজে বের করতে হবে
যখন pair/combination খুঁজতে হবে যা কোনো condition satisfy করে
যখন O(1) lookup প্রয়োজন
যখন array element এর index mapping দরকার