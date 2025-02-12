let count = 0;

function increment() {
 count++;
  if (count == 3) {
   var count = 1;
    }
     return count;
     }

     console.log(increment());
     console.log(increment());
     console.log(increment());
     
/*
     1️⃣ At the start, count = 0 globally.
     2️⃣ First function call (increment()):
     count++ makes count = 1.
     The condition count == 3 is false, so nothing happens.
     Returns 1.
     3️⃣ Second function call (increment()):
     count++ makes count = 2.
     The condition count == 3 is still false, so nothing happens.
     Returns 2.
     4️⃣ Third function call (increment()):
     count++ makes count = 3.
     Now, count == 3 is true, so var count = 1; runs.
     But here’s the trick: 
     var count is function-scoped, meaning it creates a new local count inside the function, hiding the global one.
     So now, inside the function, count is undefined before assignment due to hoisting.
     return count; gives undefined, not 1.
     Final Output:
     1 2 undefined 
     Correct answer: None of the options! 
     Key takeaway: Beware of var and hoisting! 
     */