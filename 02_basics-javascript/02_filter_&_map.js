const array = [1, 2, 3, 4, 5];
const result = array
.filter(num => num > 2)
.map(num => num*2);

console.log(result); // [ 6, 8, 10]

