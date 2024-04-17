const user={
    _email:"jkjk.com",
    _password:"wersd",
    
    get email(){
        return this._email.toUpperCase()
    },
    set email(val){
        this._email=val
    }

}      

const ta=Object.crete(user)
console.log(ta._email);
