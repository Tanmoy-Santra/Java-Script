class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email=val
    }
}

const a=new user("ff.com","qeq994")
console.log(a.password);
console.log(a.email);