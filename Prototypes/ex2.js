let myname="tanmoy        "
console.log(myname.length);
console.log(myname.trueLength);

let heroPower ={
    thor:"hammer",
    spiderman:"sling",

    getPower:function(){
        console.log(`spidy power : ${this.spiderman}`);
    }

}
Object.prototype.tanmoy=function(){
    console.log(`tanmoy is present in all objects`);
}
heroPower.getPower()
heroPower.tanmoy()


//inheritence
const User={
    name:"tom",
    email:"ee@google.com"
}

const Teacher={
    makevidio:true
}
const TeacherSupport={
    isAvailable:false

}
const TAsupport={
    makeAssignments:'js assignments',
    fulltime:true,
    __proto__: TeacherSupport

}

Teacher.__proto__=User


//moern syntax

Object.setPrototypeOf(TeacherSupport,Teacher)
//all poperty of Teacher can b access by TeacherSupport


let username1="cucu     "
String.prototype.trueLength=function(){
    console.log(`${this}`);   
    console.log(`tue length : ${this.trim().length}`);
}

username1.trueLength()