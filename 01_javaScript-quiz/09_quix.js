let a = 5;
let b = a++;

console.log(a);
console.log(b);

let x = 5;
let y = ++x;

console.log(x);
console.log(y);


/*
Explanation

1️⃣ First Part (a++ - Post-Increment)
a starts at 5.

b = a++ means: assign a to b first, then increase a.
So, b gets the old value 5, and then a becomes 6.


2️⃣ Second Part (++x - Pre-Increment)
x starts at 5.

y = ++x means: increase x first, then assign it to y.
So, x becomes 6, and y gets 6.

Final Values:
a = 6, b = 5
x = 6, y = 6

That’s why the output is:
 6
 5 
 6 
 6 

🔥 Key Difference:

a++ (post-increment) → Returns the old value, then increments.
++x (pre-increment) → Increments first, then returns the new value.
*/