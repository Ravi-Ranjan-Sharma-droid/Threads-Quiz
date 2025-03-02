
  let count = 0;

const add = () => {
    count++; // Increments the global `count` variable
    return function () {
        return count * 2;
    };
};

const result = add(); // Calls `add()` and assigns the returned function to `result`
console.log(result()); // Calls the function returned by `add()`
console.log(result()); // Calls the function again
  

