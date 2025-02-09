let x = 5;
if (x = 10) {
console.log("Hello");
}
else {
console.log("World");
}

/*
Explanation:

In the if condition, this line:

if (x = 10)

Mistakenly uses a single = (assignment operator) instead of == or === (comparison operators).

What happens?

-->  x = 10 assigns 10 to x, and returns 10, which is truthy.
-->  Since if (10) evaluates to true, the if block executes, printing "Hello".

How to fix it?
If you wanted to check if x equals 10, you should use:

if (x === 10)  // or if (x == 10)
*/