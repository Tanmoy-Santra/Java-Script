//singleton 
//constructer based objects
const tinderUser=new Object()
console.log(tinderUser);
console.log(typeof tinderUser);

const tinderUser2={}
console.log(tinderUser2);
console.log(typeof tinderUser2);

tinderUser2.id="123ax"
tinderUser2.name="tom"
tinderUser2.logedIn=false
console.log(tinderUser2);

//objects in objects (nested)
const regulaUser={
    email:"ac@gmail.com",
    fullName:{
        usersfullname:{
            firstName:"tonmoyt",
            lastName:"sen"
        }
    }
}
console.log(regulaUser.fullName.usersfullname.firstName);