//array copy is hallow copy , changes effected in the original one
console.log('----------shallow copy---------------');
arr1=[
    1,2,3,4,5
]

arr2=arr1
arr2[2]=0

console.log('arr1',arr1);
console.log('arr2',arr2);//shallow copy make changes effects in original array


console.log('----------deep copy---------------');

arr3=[1,2,3,4,5,6]
arr4=[...arr3]//using spread operator for deep copy
arr4[0]=77
console.log('arr3',arr3);//no changes in original array
console.log('arr4',arr4);

console.log('----------shallow,deep copy of array of objects---------------');

student=[
    {
        class:1,
        name:'madhy'
    },
    {
        class:2,
        name:'tom'
    },
    {
        class:3,
        name:'harry'
    }
]
// studentCopy=[...student]//this is not work for deep copy
studentCopy=JSON.parse(JSON.stringify(student))//stringfy converst into json string ,parse converts into javascript  object
studentCopy[0].class=undefined
console.log('student',student);
console.log('studentCopy',studentCopy);








