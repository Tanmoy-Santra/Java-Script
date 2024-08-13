const sweetArray =[1,2,3,4]
const MoreweetArray=sweetArray.map(sweetItem =>{
    return sweetItem*2
})
console.log(MoreweetArray);
//outout - [ 2, 4, 6, 8 ]

const arr=[1,2,3,4,5]
const addArr= item => item+1
const newarr=arr.map(addArr)
console.log(newarr);

//output [ 2, 3, 4, 5, 6 ]


// How to Convert a JS String to an Array
//---------------------------------------
// .map() is known to belong to the array prototype. In this step you will use it to convert a string to an
// array. You are not developing the method to work for strings here. Rather, you will use the special
// .call() method.
// Everything in JavaScript is an object, and methods are functions attached to these objects. .call()
// allows you to use the context of one object on another. Therefore, you would be copying the
// context of .map() in an array over to a string.
// .call() can be passed arguments of the context to be used and parameters for the arguments of
// the original function.
// Here's an example:

const name='sam'
const map=Array.prototype.map


const newName=map.call(name,newname=>{
    return `${newname}a`
})
console.log(newName);



