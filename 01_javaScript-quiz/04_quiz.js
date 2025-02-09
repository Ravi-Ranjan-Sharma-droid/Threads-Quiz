console.log([ ] + [ ]);
console.log(true + true);
console.log(!!"false" == !!"true");
console.log(typeof NaN);


/*
[] + [] → Converts to an empty string "".
true + true → 1 + 1 = 2.
!!"false" == !!"true" → Both are truthy, so true.
typeof NaN → Returns "number" (JavaScript quirk).
 */