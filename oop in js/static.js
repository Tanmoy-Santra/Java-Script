class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username : ${this.username}`);
    }
  static  createId(){
        return `123`
    }

}

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
//const tom=new user("tom")
//console.log(tom.createId());

const a=new Teacher("hii","sdsd.com")
a.logme()
console.log(a.createId());//creatId devlear as static so , we not access it                                      