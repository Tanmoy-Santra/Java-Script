//Array is js
//-resizeable
//-mix data type
//indexing start with 0
//make shallow copy : A shallow copy of an object is a copy whose properties share the same references
//(point to the same underlying values) as those of the source object from which the copy was made.
//As a result, when you change either the source or the copy, you may also cause the other object to change too.
//That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.
//Deep copy : A deep copy of an object is a copy whose properties do not share the same references (point to
//the same underlying values) as those of the source object from which the copy was made. As a result, 
//when you change either the source or the copy, you can be assured you're not causing the other object to change too.
//That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the source or the copy
//may cause the other object to change too.

const myArr=[1,2,3.87,898,true]
console.log(myArr);
console.log(typeof myArr);//return type is object
const myArr2=new Array("tom",'bob','merry','blake')
console.log(myArr2);

//******Array methods********
//push--add the values
myArr.push(90)
console.log(myArr);

//pop -- remove last value
myArr.pop()
console.log(myArr);

//unshift--insert array's first position
myArr.unshift(89)
console.log(myArr);

//shift--pop from first 
myArr.shift()
console.log(myArr);

//includes--return bolean type ,if the value is present or not
console.log(myArr.includes(1));
console.log(myArr.includes(11));

//indexOf-- to find the index of value
console.log(myArr.indexOf(11));//if not present returns -1
console.log(myArr.indexOf('yy'));

//join--adds all the elements of an array into a string
const newArr=myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);//format change into string type


//slice ,splice
console.log("A ",myArr);
const myn1=myArr.slice(1,3)//include 1 to n-1 means 2nd value in to myn1 (2) [2, 3.87]
console.log(myn1);
console.log("B ",myArr);

console.log("A ",myArr);
const myn11=myArr.splice(1,3)//include 1 to n-1 means 2nd value in to myn1 ,,splice cut the value , effect in main array
console.log(myn11);//
console.log("B ",myArr);//(3) [2, 3.87, 898]0: 21: 3.872: 898length: 3[[Prototype]]: Array(0)
//VM234:3 B  (2) [1, true]
