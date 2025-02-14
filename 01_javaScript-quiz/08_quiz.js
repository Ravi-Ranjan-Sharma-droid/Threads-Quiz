const obj1 = { a: 1 };
const obj2 = obj1;

obj2.a = 5;

console.log(obj1.a);
console.log(obj2 === obj1);

/*
Explanation

1️⃣ Objects in JavaScript are stored by reference, not by value.
const obj1 = { a: 1 } creates an object in memory.
const obj2 = obj1; does not create a new object—it just makes obj2 point to the same object in memory.

2️⃣ When you modify obj2.a = 5, you're changing the same object that obj1 refers to.
So, obj1.a is also 5, because obj1 and obj2 are the same object.

3️⃣ obj2 === obj1 is true
They point to the same object in memory, so strict equality (===) returns true.

Final Output:

5 
true

🔥 Key Takeaway: Assigning an object to another variable does not create a copy—it just creates another reference to the same object.
*/