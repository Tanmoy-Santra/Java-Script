function SetUserName(username){
    //complex DB call
    this.username=username //this '.this  is passed from the setUserName
    console.log("called");
}
function createUser(username,email,password){
    SetUserName.call(this,username) //holds the reference of  'user'
    //this.username=username
    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@o.com","233")
console.log(chai);