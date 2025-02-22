let a = { value: 10 };
let b = a;

b.value = 20;

console.log(a.value);
console.log(b.value);
/*
 In JavaScript, objects are assigned by reference, not by value.
 a is an object with a property value: 10.
 b = a does not create a new object; it points to the same object in memory.
 Changing b.value = 20 modifies the original object, since both a and b refer to the same memory location.
 So, when we log a.value and b.value, both will print 20.
 */