
//basic
const user={
    username:"tanmoy",
    logincount:8,
    signedin:true   ,
    
    getUserDetails :function(){
        console.log("ok fine");
        console.log(`username : ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());

console.log(this);//this prints the global context when we log in console then it returns window object


//consatructor
 
//const promiseOne = new Promise()
//new is a consructor function

function User(username,logincount,islogedin){
    this.username=username
    this.islogedin=islogedin
    this.logincount=logincount

    //return this 
    //by default impliitly define
}
            
const user1=new User("tanmoy",12,true)
console.log(user1);

const user2=new User("tom",11,true)
console.log(user2);


//new object 
//--------------------------                    
//1. creation of a new object
//2. construture fuctuin called
//3. inject keyword ,and arguments
//4. function is ready
         