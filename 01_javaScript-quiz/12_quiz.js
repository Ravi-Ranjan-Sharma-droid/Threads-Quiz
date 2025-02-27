let count = 0;

const add = () => {
  count++;
    return count;
    };

    console.log(add());
    console.log(add());
    console.log(++count);
    console.log(add());

/*
  
let count = 0;

const add = () => {
  count++;
    return count;
    };

    console.log(add());   // (1) count is incremented to 1, output: 1
    console.log(add());   // (2) count is incremented to 2, output: 2
    console.log(++count); // (3) count is incremented to 3 before logging, output: 3
    console.log(add());   // (4) count is incremented to 4, output: 4

->  final output 
    1
    2
    3
    4

    Explanation:

    The add function increments count and returns the updated value.no
    The third console.log(++count); increments count directly before logging it.
    Since count is a global variable, all increments are persistent across function calls.

    <-----ignore----->
Since my laptop isn't working due to a malfunctioning charger—or simply a torn cable—I'm posting this quiz from my tablet.


*/



