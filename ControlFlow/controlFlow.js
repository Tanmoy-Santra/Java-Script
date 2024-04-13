//control flow or logic flow

//if block
//------------------
const isloogedin=true
if(isloogedin){
    console.log("loged in successfully");
}

//conditional operator
// ----------------------
// <,>,<=,>=,==,
// === check the type also ,!==
//example
if(2=="2"){
    console.log("2=='2'");
}
if(2==="2"){
    console.log("2==='2'");
}
if(2!=="2"){
    console.log("2!=='2'");
}

const temprature=41
if(temprature<50){
    console.log("yes ,temprature<50");
}
else{
    console.log("no temprature is 41");
}
//example related to scope
const score=300
if(score>100){
    const power="fly"
    console.log("ok i am is score");//this is printed
}
//console.log(power);//this is not run becaue the power is out of scope

//shorthand notetion

const balance=1000
if(balance>900)console.log("test");//implesit scope

//nested condition
if(balance<500){
    console.log("leSs than 500");
}else if(balance<750){
    console.log("less than 750");
}else if(balance<900){
    console.log("less than 900");
}else{
    console.log("less than 1050");
}
//multiple condition
const userlogedin=true
const debitCard=true
const logifromGoogle=false
const loginFromEmail=true
if(userlogedin && debitCard ){
    console.log("you can purchase the course");
}
if(logifromGoogle || loginFromEmail){
    console.log("yes, logIn");
}

//switch case
const month=3;
switch (month) {
    case 1:
        console.log("jan");        
        break;
    case 2:
        console.log("Feb");        
        break;
    case 3:
        console.log("March");        
        break;
    default:
        console.log("default");
        break;
}

//truth or falsey value
let userEmail="ok@google.com"
if(userEmail){
    console.log("got user  email");
}else{
    console.log("Don't have user email");
}
/*
falsy value
-----------
false , 0 , -0 , 0n in BigInt , null ,NaN , undefind,"" (empty string)

truthy value
------------
"0" , 'false' , " " ,[] ,{},function(){} --empty function
*/ 

//check an empty Array or Object
let userEmail1=[]
if(userEmail1.length===0){
    console.log("Array is empty");
}

let userEmail11={}
if(Object.keys(userEmail11).length===0){
    console.log("Object is empty");
}

//Nullish Coalescing Operater (??): (null,undefind)

let value1,value11,value111
value1=5??10//take the first value
console.log(value1);

value11=null??10??12//take the 10 value not null
console.log(value11);

value111=undefined??10??12//take the 10 value not null
console.log(value111);

//==============================

//ternary operator
//condition ? true : false
const iceTeaPrice=100
iceTeaPrice >= 80 ? console.log(">80") : console.log("<80");

