
// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)

const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);

Object.defineProperty(Math,'PI',{
    writable: true,
    enumerable: true,
})
// TypeError: Cannot redefine property: PI
//     at Function.defineProperty (<anonymous>)
//     at Object.<anonymous> (c:\Users\tanmo\OneDrive\Desktop\4TH SEM\JS PRO\Tutorials\intrview question\math_pi.js:9:8)      

const chai ={
    name:"ginger cahi",
    price:250,
    isAvailabel:true

}

console.log(chai);

Object.defineProperty(chai,"name",{
    writable: false,
    enumerable: false,
    
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);    
}