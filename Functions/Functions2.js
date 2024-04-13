//during creat shopping cart in E-commarce website
//ex-1
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2))
//output 2

//ex-2
//rest operator

function calculateCartPrice1(...num11){
    return num11
}
console.log(calculateCartPrice1(200,300,400,389));
//output-[ 200, 300, 400, 389 ]
//returns an array , rest work like spread

//ex-3 ******
function calculateCartPrice11(val1,val2,...num111){
    return num111
}
console.log(calculateCartPrice11(200,300,400,389));
//output - [ 400, 389 ]
//val1 tales 200 , val2 takes 300 ,and remaining are print 

//ex-4
//objects in function

const user={
    userName:"tommy",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}
handleObject(user)

//passing direct object
handleObject({
    userName:"sam",
    price:299
})

//arrays in function

const myArr=[1,2,3,4,5]

function returnSecontVal(getArr){
    return getArr[1]
}
console.log(returnSecontVal(myArr));
console.log(returnSecontVal([12,23,34,45]))

