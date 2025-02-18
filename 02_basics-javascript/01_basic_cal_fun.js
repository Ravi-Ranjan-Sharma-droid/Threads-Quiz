// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Example of using these functions
let num1 = 10;
let num2 = 5;

console.log("Addition: " + add(num1, num2)); // 15
console.log("Subtraction: " + subtract(num1, num2)); // 5
console.log("Multiplication: " + multiply(num1, num2)); // 50
console.log("Division: " + divide(num1, num2)); // 2

// Edge case for division by zero
console.log("Division by Zero: " + divide(num1, 0)); // Cannot divide by zero




/*
Key Concepts in this Code:

1. Functions: Learning how to define and call functions (add, subtract, multiply, divide).

2. Variables: Using let to store numbers.

3. Operators: Arithmetic operators like +, -, *, and /.

4. Conditionals: Using if to check for division by zero.

5. Console Output: Using console.log() to display results.


Why This Is Important:

Functions are a core part of JavaScript and programming in general.
Understanding basic operations like addition, subtraction, and conditional checks (like dividing by zero) is crucial.
Practicing logging output to the console helps you understand how your code behaves and debug it.



*/