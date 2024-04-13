  const user={
    username:"tom",
    price:123,
    welcomeMsg: function(){
        console.log(` ${this.username}, welcome to  website`);
        console.log(this);
    }//this keyword refers current context

  }
user.welcomeMsg()
user.username="sam"
user.welcomeMsg()
console.log(this);//return empty object
//NOTE : in case of browser console.log(this); returns window object
//console.log(this);
//VM72:1 Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}



// function chai(){
//     username:"tonmoy"
//     console.log(this.username);//returns undefined , 'this' is use for objects only 
// }
// chai()

const chai=function(){
    username:"tonmoy"
    console.log(this.username);
}
chai()//undefined

//Arrow function
 const Arrow = () =>{
    username:"tonmoy"
    console.log(this.username);//undefined
    console.log(this);//{}

 }
 Arrow()

 const adTwo = (n1,n2)=>{    
        console.log(n1+n2);
     }
 adTwo(3,4)
 
const add = (n1,n2) => (n1+n2)//implisit return **mostly use in react 

console.log(add(2,3))

