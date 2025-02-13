console.log(foo());  

var foo = function() {
  return "Hello!";
  };

  function foo() {
    return "Hi!";
    }




    /* 

 Explanation

 1. JavaScript hoists function declarations first, meaning the function foo() is moved to the top with its full definition.

 2. Then, JavaScript sees var foo;, which is also hoisted, but only the declaration, not the assignment.

 3. When console.log(foo()) runs, foo still refers to the original function declaration, which returns "Hi!".

 4. After this, foo is reassigned to a new function ("Hello!"), but it's too late because the console log has already executed.

 5. So, the output is "Hi!", not "Hello!".





    */