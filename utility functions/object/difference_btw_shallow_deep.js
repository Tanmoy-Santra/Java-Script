// Example: Shallow Copy with Primitives

const obj1 = { 
    name: "Alice",  // Primitive value
    age: 25,        // Primitive value
};

const obj2 = { ...obj1 };  // Shallow copy

obj2.name = "Bob";  // Changing the copied object

console.log(obj1.name); // ✅ "Alice" (unchanged)
console.log(obj2.name); // ✅ "Bob"

//Explanation:

// name and age are primitive values, so when they are copied, they get a new memory location.
// Changing obj2.name does not affect obj1.name.



// 🔹 Example: Shallow Copy with Nested Objects

// const obj1 = { 
//     name: "Alice",
//     details: { age: 25, city: "New York" }  // Nested object
// };

// const obj2 = { ...obj1 };  // Shallow copy

// obj2.details.city = "Los Angeles";  // Modifying nested object

// console.log(obj1.details.city); // ❌ "Los Angeles" (also changed in obj1)
// console.log(obj2.details.city); // ✅ "Los Angeles"


// // Explanation:

// details is an object, so it is copied by reference, meaning obj1.details and obj2.details point to the same memory location.
// Changing obj2.details.city also changes obj1.details.city.




//Example of Deep Copy:

// const obj1 = { 
//     name: "Alice", 
//     details: { age: 25, city: "New York" } 
// };

// // Deep Copy using JSON methods
// const obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.details.city = "Los Angeles"; // Modifying nested object

// console.log(obj1.details.city); // ✅ Output: "New York" (unchanged)
// console.log(obj2.details.city); // ✅ Output: "Los Angeles"
// 🔹 Why? JSON.parse(JSON.stringify(obj1)) creates a brand new object in memory, ensuring that the nested details object is not shared.