//Javascript 5th quiz!
//Level -->( Intermediate)


let obj = {
    a: 1,
    b: 2,
    c: 3
};
let keys = Object.keys(obj);
keys.forEach(key => {
    if (key === "b") {
        delete obj[key];
    }
});
console.log(Object.keys(obj).length);
console.log(keys.length);


/*

Explanation of the JavaScript Quiz
Let's break this down step by step:

Step 1: Define the Object

We start with an object obj:

let obj = {
  a: 1,
  b: 2,
  c: 3
};

This object has three properties:

"a" → 1
"b" → 2
"c" → 3

Step 2: Get Keys Using Object.keys(obj)

let keys = Object.keys(obj);
Object.keys(obj) returns an array of property names:
keys = ["a", "b", "c"];
So keys.length is 3 at this point.

Step 3: Loop Through Keys and Delete b

keys.forEach(key => {
  if (key === "b") {
    delete obj[key];
  }
});

The loop iterates over "a", "b", and "c".
When it reaches "b", it deletes obj["b"].

At this point, obj becomes:

{
  a: 1,
  c: 3
}

The object no longer contains "b", but the keys array remains unchanged because it was created before we modified the object.

Step 4: Logging the Outputs

console.log(Object.keys(obj).length);
console.log(keys.length);

Object.keys(obj).length:

After deleting "b", Object.keys(obj) now returns ["a", "c"].

Length = 2 ✅


keys.length:

The keys array was never modified after being created
It still contains ["a", "b", "c"].

Length = 3 ✅

Final Output:

2
3

✅ Correct Answer: B) 2, 3

Key Takeaways:

1. Deleting an object property does NOT affect previously stored arrays of its keys.
2. Object.keys(obj) is dynamic—it reflects changes in the object.
3. Arrays don’t auto-update when the original object changes.

JavaScript Gotcha Moment:

People expect keys.length to change, but since keys is a separate array, it remains unchanged even though the object itself was modified.
That's the tricky part! 🤯

        How is going bro :)
*/