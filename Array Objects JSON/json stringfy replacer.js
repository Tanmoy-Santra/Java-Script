let user={
    "name":'tanmoy',
    "roll":45,
    "address":
    {
        "vill":"gangadharpur",
        "post":"gangadharpur bazar",
        "pin":876789
    },
    "age":21
}
console.log("json stringfy");
console.log(JSON.stringify(user));
console.log("flat");


console.log("json parse");
console.log(JSON.parse(JSON.stringify(user)));

console.log("replacer");

let replacer = (key,value) =>{
    if(key==='address')
        return undefined
    return value
}
let replacer2 = (key,value) =>{
    if(key==='address')
        return key='fulladdress'
    return value
}



let userCopy=JSON.parse(JSON.stringify(user,replacer2))
console.log("usrCopy",userCopy);


