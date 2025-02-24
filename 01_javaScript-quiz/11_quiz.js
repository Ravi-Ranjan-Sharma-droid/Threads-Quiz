const obj1 = {
    x: 10,
    y: obj?.x + 5

};
console.log(obj.y);




/*
This code will throw an error:

Explanation:

1. The object obj is being defined.

2. The y property is assigned the value of obj?.x + 5 while obj is still being created.

3. However, obj?.x refers to obj.x, which has not been fully defined yet.

4. Since obj is not yet initialized at the time of property assignment, it leads to a ReferenceError: Cannot access 'obj' before initialization.

Corrected Approach:

If you want y to be x + 5, define x first and then add y afterward:
*/

const obj = {
  x: 10
  };

  obj.y = obj.x + 5;

  console.log(obj.y); // Output: 15

  
