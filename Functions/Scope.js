
let a =90
const b=56
var c=89//this is called global scope

console.log(a);
console.log(b);
console.log(c);

if(true){
    let a =9044
    const b=5644
    console.log("inside if block (let)a=: ",a);
    console.log("inside if block (const)b=: ",b);
    var c=844
}//this is called blocked scope

//****NOTE : Global scope variable can be in side in the block scope but block scope variable are not replicate out side  the scope******

//2.we not use var , use let and const
console.log("global scope (let)a=:",a);
//3. the values of a are totally independent inside if block :  9044 global scope : 90 (use let a)
console.log("inside if block (const)b=: ",b);
//4.inside if block (let)a=:  9044
// inside if block (const)b=:  5644
// global scope (let)a=: 90
// inside if block (const)b=:  56
console.log("c=",c);
//5. var c -- c value is change , choose the current changed value c= 84