const promiseOne=new Promise(function(resolve,reject){
    //Do an asyc task
    // DB calls, cryptography ,netwwork
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()//is connected with the .then() function
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})
//the setTimeout() task is complete first then the promise task .
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolve");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username :"chai",email:"chai@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true;
        if(!error){
            resolve({username :"tanmoy",password:"1234"})
        }
        else{
            reject('ERROR something went wrong !!')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log("user");
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("the promise is either or rejected");
})


const pomiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript",password:"password js"})
        }
        else{
            reject('ERROR :something went wrong in js!!')
        }
    },1000)
})
async  function consumePromiseFive(){
    try{

        const response=await pomiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()


//use api

// async function getAllUsers(){
//    try {
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log('err:',error);    
//    }
    
// }
// getAllUsers()


//another way

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))