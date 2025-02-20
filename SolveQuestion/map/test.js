b = 60
keyboards=[40, 50, 60]
drives =[5, 8, 12]
let res=[]

keyboards.forEach(element => {
    drives.forEach(e2=>{
        if((element+e2)<=b){

            res.push(element+e2);
        }
    });    
});

console.log(res.sort((a,b)=>b-a)[0]);
console.log(keyboards.length);
