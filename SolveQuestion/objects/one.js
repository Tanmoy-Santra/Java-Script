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


// 4. Remove Duplicates Based on Key
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
  

// 5. Transform Object Keys
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



// 6. Merge Two Objects
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




//7 make a list of keys and values

const anime={
  1:'naruto',
  2:'madara' ,
  3:'obito ',
  4:'hitachi',
  5:'sasuke' ,   
}
let l1=[],l2=[];
console.log(anime);

const entire=Object.entries(anime)
console.log(entire);

for(const [key,value] of entire){
  console.log(key,":",value);
  l1.push(key)  ;
  l2.push(value);
}
console.log(l1);
console.log(l2);

