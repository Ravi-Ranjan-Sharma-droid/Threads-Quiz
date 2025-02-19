const array = [1, 2, 3, 4, 5];
const result = array.reduce((acc, num) => {
    if (num > 2) {
        acc.push(num * 2);
    }
    return acc;
}, []);

console.log(result); //[ 6, 8, 10]