// stack==>primitive data type
// heap==>non-primitive data type


/*
Primitive data types
===================

Primitive data types are immutable, meaning that they cannot be changed once they are created. For example, 
if you create a string variable and assign it the value "hello", you cannot change the value of the variable
to "world" without creating a new variable.
 
There are seven primitive data types in JavaScript. They are:
String: - A string is a sequence of characters. It can be created using single quotes ('), double quotes ("), or backticks (`).
Number: - A number is a numeric value. It can be an integer, a floating-point number, or a special value like NaN or Infinity.
Boolean: - A boolean is a logical value. It can be either true or false.
Null: - Null is a special value that represents the absence of a value.
Undefined: - Undefined is a special value that represents a value that has not yet been assigned.
BigInt: - BigInt is a primitive data type that can represent integers with arbitrary precision.
Symbol: - Symbol is a primitive data type that can be used to create unique identifiers.

non-Primitive data types
========================

There are two types of data types in JavaScript: primitive and non-primitive.
Primitive data types are the simplest types of data, and they include:
numbers, strings, booleans, null, and undefined.

Non-primitive data types are more complex, and they include:
objects, arrays, and functions.

Non-primitive data types are also known as reference data types, because they store references to values,
rather than the values themselves. This means that when you assign a non-primitive data type to a variable, 
you are actually assigning the variable a reference to the value. If you then change the value, the variable 
will still point to the original value.

Primitive data types, on the other hand, are immutable, which means that they cannot be changed. If you try 
to change a primitive data type, you will actually create a new value.
*/

let name="tanmoy santra";
let myName=name
myName="ariyan santra"
console.log(name);
console.log(myName);

// in case of primitive data type "name" store in stack and when we copy this in to 'myName'
//the copy of reference of the data type is occur the value emain same in case of name 

let userOne={
    name:"tanmoy",
    email:"tanmoy@google.com"
}
//let userTwo=userOne

userOne.email="anish santra"

console.log(userOne);//{name: 'tanmoy', email: 'anish santra}
console.log(userTwo);//{name: 'tanmoy', email: 'anish santra}
//both are changed

/*let userOne={
    name:"tanmoy",
    email:"tanmoy@google.com"
}
let userTwo=userOne

userOne.email="anish santra"

console.log(userOne);
console.log(userTwo);*/
//VM975:9 {name: 'tanmoy', email: 'anish santra'}
//VM975:10 {name: 'tanmoy', email: 'anish santra'}


//userOne is a non primitive data type stored is heap so change in both is occur    
