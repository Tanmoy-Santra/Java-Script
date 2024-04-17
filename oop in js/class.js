//ES 6

class User{
    constructor(name,email,password){
        this.name=name
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${(this.name).toUpperCase()}`
    }
}

const chai=new User("chai","chai@gmail.com","123")
console.log(chai.encryptPassword());
console.log(chai.changeUserName());

// behind  the seen

function user(name,email,password){    
        this.name=name
        this.email=email
        this.password=password
    }

    user.prototype.encryptPassword=function(){
        return `${this.password}abc`
    }


    const chai1=new user("chai","chai@gmail.com","123")
    console.log(chai1.encryptPassword());
    