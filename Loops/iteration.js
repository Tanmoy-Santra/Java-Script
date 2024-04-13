//for looop
let array=[1,2,3,4,5]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element==2) {
        console.log("i am 2");        
    }
    console.log(element," ");
}                  
//console.log(element," "); cannot access outside the scope

//nested loop
for (let index = 0; index < array.length; index++) {    
    console.log("i am in outer loop")
    for (let i = 0; i < array.length; i++) {        
        console.log("i am in inner loop")        
    }           
    
}

//break , continue

for (let index = 1; index <=20; index++) {
   if(index==5){
       console.log(index);    
       break       
   }
   console.log(index)
}

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(index);    
        continue      
    }
    console.log(index)
 }