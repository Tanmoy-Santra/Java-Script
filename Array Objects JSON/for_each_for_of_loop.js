a=[1,2,3,4,5]

console.log("-------for loop-----------");

for (let index = 0; index < a.length; index++) {
    const element = a[index];
        console.log(element);        
}

console.log("-----------for of----------------");

for (const element of a) {
    console.log(element);
        
}

console.log("--------------for in------------------");
for (const key in a) {
    //if (Object.prototype.hasOwnProperty.call(a, key)) {
        const element = a[key];
        console.log(element);     
        
    //}
}


console.log("--------------for each---------------");

a.forEach(element => {
    console.log(element);        
});


const obj = {
    name: "tom",
    age: 77,
    town: "kolkata"
};

Object.entries(obj).forEach(([key, val]) => {
    console.log(`${key} = ${val}`);
});
