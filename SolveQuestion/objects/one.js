// 1. Find the Most Frequent Key
// Problem:
// Given an object where keys represent categories and values represent the frequency, find the key with the highest frequency.
   
// const data = {
//   apple: 4,
//   banana: 2,
//   orange: 5,
//   mango: 3
// };
// Output: 
// // Most Frequent: orange

const data = {
    apple: 4,
    banana: 2,
    orange: 5,
    mango: 3
  };
  
  valueToFind=Object.keys(data).reduce((a, c) => Math.max(a, data[c]),-Infinity)

const key = Object.keys(data).find(key => data[key] === valueToFind);
  
console.log(key);




// 2. Convert Array of Objects to Single Object
// Problem:
// Transform an array of objects into a single object where each key is the id and the value is the entire object.

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" }
// ];
// Output: 
// // {
// //   1: { id: 1, name: "Alice" },
// //   2: { id: 2, name: "Bob" },
// //   3: { id: 3, name: "Charlie" }
// // }
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const usersObj = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

console.log(usersObj);




// 3. Deep    Object
// Problem:
// Write a function to create a deep copy of a nested object without using JSON methods.

// const obj = {
//   a: 1,
//   b: { c: 2, d: { e: 3 } }
// };
// Output:

// // A new object that does not reference the original one.
const obj = {
  a: 1,
  b: { c: 2, d: { e: 3 } }
};

const clonedObj = JSON.parse(JSON.stringify(obj));

console.log(clonedObj);


// 4. Group by Property
// Problem:
// Group an array of objects by a specific property.

// const data = [
//   { name: "Alice", role: "developer" },
//   { name: "Bob", role: "designer" },
//   { name: "Charlie", role: "developer" }
// ];
// Output:

// // {
// //   developer: [{ name: "Alice", role: "developer" }, { name: "Charlie", role: "developer" }],
// //   designer: [{ name: "Bob", role: "designer" }]
// // }




// 5. Flatten a Nested Object
// Problem:
// Write a function that flattens a deeply nested object.

// const obj = {
//   a: 1,
//   b: { c: 2, d: { e: 3 } }
// };
// Output:

// // { "a": 1, "b.c": 2, "b.d.e": 3 }



// 6. Find the Key with the Maximum Value
// Problem:
// Given an object, find the key with the highest value.
// const scores = {
//   Alice: 85,
//   Bob: 92,
//   Charlie: 88
// };
// Output:

// // Highest Score: Bob


// 7. Remove Duplicates Based on Key
// Problem:
// Remove duplicate objects in an array based on a specific key.
 
// const arr = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 1, name: "Alice" }
// ];
// Output:

// // [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]

const arr = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" }
  ];

  let o=arr.reduce((a,c)=>{
    if(!a.some(item=>item.id===c.id)){
      a.push(c);
    }
    return a;
  },[])

  console.log(o);
  

// 8. Transform Object Keys
// Problem:
// Write a function that takes an object and returns a new object where all keys are transformed to uppercase.
// const obj = { firstName: "Alice", lastName: "Smith" };
// Output:

// // { FIRSTNAME: "Alice", LASTNAME: "Smith" }
const obj1 = { firstName: "Alice", lastName: "Smith" };

const newObj = {};  // Initialize an empty object
Object.keys(obj1).forEach((key) => {
  newObj[key.toUpperCase()] = obj1[key];  // Assign new key-value pair
});

console.log(newObj);  // Log the new object



// 9. Merge Two Objects
// Problem:
// Write a function to merge two objects. If a key exists in both, combine their values into an array.

// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { b: 4, c: 5, d: 6 };
// Output:

// // { a: 1, b: [2, 4], c: [3, 5], d: 6 }

const obj11 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, c: 5, d: 6 };

const obj111={...obj11,...obj2};
console.log(obj111);





// 10. Sort Object by Values
// Problem:
// Sort the keys of an object based on their values.

// const obj = {
//   a: 3,
//   b: 1,
//   c: 2
// };
// Output:
 
// // { b: 1, c: 2, a: 3 }
