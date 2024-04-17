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
}

const chai=new User("chai","chai@gmail.com","123")
console.log(chai.encryptPassword());