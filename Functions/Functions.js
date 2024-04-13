function SayMyName(){
    console.log("tanmoy");
    console.log("santra");
}

SayMyName()

//func to add 2 no.
function AddTwoNo(num1,num2){//num1 & num2 called as parameters
    console.log(num1+num2);
}
AddTwoNo(2,4)//return 6
//2,4 called arguments
AddTwoNo(1,'7')//17
AddTwoNo(3,null)//3
AddTwoNo("y"+3)//y3undefined

const result=AddTwoNo(8,8)
console.log("result : ",result);//result :  undefined

function AddTwoNo(num1,num2){
   let result1=(num1+num2);
    return result1
}
res=AddTwoNo(8,9)
console.log(res);

//ex-1
function loginUserMsg(usrname){
    return `${usrname} just loged in`
}
console.log(loginUserMsg("tanmoy"))
//ex-2
// function loginUserMsg(usrname){
//     if(usrname===undefined){
//         console.log("plz enter the username");
//         return
//     }
//     return `${usrname} just loged in`
// }
//ex-3
// console.log(loginUserMsg())
// function loginUserMsg(usrname){
//     if(!usrname){
//         console.log("plz enter the username");
//         return
//     }
//     return `${usrname} just loged in`
// }
// console.log(loginUserMsg())

//ex-4
function loginUserMsg(usrname='sam'){
    if(!usrname){
        console.log("plz enter the username");
        return
    }
    return `${usrname} just loged in`
}
console.log(loginUserMsg("tom"))
//output-tom just loged in--over ride the valu sam with tom , if no value pases then sam is print
