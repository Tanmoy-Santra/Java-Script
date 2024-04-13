let a="wuey"
let c=Number(a)
console.log(c);//NaN (not a number)
console.log("type of b ",typeof c);//number

let v="88"
let c1=Number(v)
console.log(c1);//88
console.log("type of b ",typeof c1);//number


let v1=null
let c11=Number(v1)
console.log(c11);//0
console.log("type of b ",typeof c11);//number

let v11=false
let c111=Number(v11)
console.log(c111);//0 //if true returns 1
console.log("type of b ",typeof c111);//number

let v111=undefined
let c1111=Number(v111)
console.log(c1111);//Nan 
console.log("type of b ",typeof c1111);//number

let v1111=454554
let c11111=String(v1111)
console.log(c11111);//454554 
console.log("type of b ",typeof c11111);//string

let v11111=454554
let c111111=Boolean(v11111)
console.log(c111111);//true
console.log("type of b ",typeof c111111);//boolean

let v111111=-454554
let c1111111=Boolean(v111111)
console.log(c1111111);//true
console.log("type of b ",typeof c1111111);//boolean
let v1111111=0
let c11111111=Boolean(v1111111)
console.log(c11111111);//false
console.log("type of b ",typeof c11111111);//boolean

let v2=""
let c2=Boolean(v2)
console.log(c2);//false
console.log("type of b ",typeof c2);//boolean
let v21="rr"
let c21=Boolean(v21)
console.log(c21);//true
console.log("type of b ",typeof c21);//boolean

