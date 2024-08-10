//singletons

//object literals

const mySymbol=Symbol("key1")
const JSuser={
    name:"Tanmoy",
    age:21,
    //1. mySymbol:"mykey1",
    [mySymbol]:"mykey1",
    location:"hooghly",
    email:"tsantra@google.com",
    IsLogedIn:false,
    lastLoginDay:["monday","sunday"]
}
console.log(JSuser.email);
console.log(JSuser["email"]);//2 ways to access the object info..

//1.console.log(typeof JSuser.mySymbol); this is string now this is not the right way to add symbol into the object 

console.log(JSuser[mySymbol]);
console.log(typeof JSuser[mySymbol]);//interview

JSuser.email="ok@yo.com"
//***Object.freeze(JSuser)//after this line no changes occur in jsuser object .
email="ok@123456yo.com"
console.log(JSuser);

// {
// name: 'Tanmoy',
// age: 21,
// location: 'hooghly',
// email: 'ok@yo.com',
// IsLogedIn: false,
// lastLoginDay: [ 'monday', 'sunday' ],
// [Symbol(key1)]: 'mykey1'
// }

JSuser.greeting=function(){
    console.log("hello js user");
}
JSuser.greeting2=function(){
    console.log(`hello js user ${this.name}`);//string interpolation
}
console.log(JSuser.greeting());
console.log(JSuser.greeting2());