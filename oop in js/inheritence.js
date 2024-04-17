//ES 6

class User{
    constructor(name){
        this.name=name
        
    }

   logme(){
        console.log(this.name);
    }

   
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    logme(){
        console.log(this.email , this.password,this.name);
    }
}
const ok=new User("tom")
ok.logme()
const chai=new Teacher("chai","ok@m.com","1234");
chai.logme()