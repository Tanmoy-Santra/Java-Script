//nested scope
//ex-1
function one(){
    const usrname="tom"
    function two(){
        const website="YouTube"
        console.log("username (one) ",usrname);//when two() executes the username prints
    }
    //console.log("website (two) ",website);//it is outside the scope so error.

    two()

}
one()

//*****NOTE : boro lok child der thaka icecreame nite parbe na , but child ra boro der thaka iceceam nite parbe******

//ex-2
if(true){
    const username="olly"
    if(username=="olly"){
        const website = " google"
        console.log(username+website);
    }
   // console.log(website);
}
//console.log(username);

//ex-3******
function addone(num){
    return num+1
}
addone(5)

const addTwo=function(num){
    return num+2
}
addTwo(5 )