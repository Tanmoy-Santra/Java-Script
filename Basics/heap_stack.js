// stack==>primitive data type
// heap==>non-primitive data type

let name="tanmoy santra";
let myName=name
myName="ariyan santra"
console.log(name);
console.log(myName);

// in case of primitive data type "name" store in stack and when we copy this in to 'myName' the copy of reference of the data type is occur the value emain same in case of name 

let userOne={
    name:"tanmoy",
    email:"tanmoy@google.com"
}
let userTwo=userOne

userTwo.email="anish santra"

console.log(userOne);
console.log(userTwo);

//userOne is a non primitive data type stored is heap so change in both is occur    