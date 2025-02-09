//💀JavaScript quiz💀

let y = 0;
if (y) {
console.log("True Block");
} else if (!y) {
console.log("False Block 1");
} else {
console.log("False Block 2");
}
/*
Explanation:

Variable Initialization:

let y = 0; initializes y with 0.
First if Condition (if (y))

In JavaScript, 0 is considered falsy.
Since y is 0, the condition if (y) evaluates to false.
The "True Block" is not executed.
Second else if Condition (else if (!y))

The !y means "not y".
Since y is 0 (which is falsy), !y becomes true.
So, this block executes, and "False Block 1" is printed.
Final else Block (else)

Since the previous else if condition already executed, the else block is never reached.

Output:False Block 1

Summary:
The first if fails because y is 0 (falsy).
The else if succeeds because !y is true.
The else never runs because the else if block already executed.

*/   



// Hope you like it :)