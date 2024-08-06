//========================LET==========================
let i=3
console.log(' i ',i);
{
    // console.log(' i cannot global',i);
    
    let i=0 
    console.log("within another scope",i);
    i=99
    console.log(`re-assign ${i}`);
    
}
//let i=1 -- we cannot re-decleare the let variable within a scope 
//          -- but we can re-assign the value of let variable   

// {} -> is called scope we can use the same named variable .

{
    let i=9
    console.log("inside the another scope");
    console.log(i);
}


//===================================VAR=======================================================


// the old js version people use var likewis let , 
//the problem is there is same named var are change any where so now we use let instade of var
//for isuues in block scope and funtional scope .

//it is easily re declare and re assign with in a same scope 
//if it declare outside the function or block it act as global variable
//var i function scoped or block scoped

var j=78
var j=5 //j value changes in to the curent value
console.log(j)
{
    console.log('j is global',j);
    
}





//===========================CONST===================================

const e=90
console.log( "typ of e --",typeof(e));
console.log("type of i--",typeof(i));//it returns undefind because the i assign in the another scope and we print is outside the scope
console.log("type of j--",typeof(j));

// {
//      e=9;
// }
//const e=0 we cannot change  the value of const within the same scope or outside the scope the value remain unchanged.
//blocked scope not reassign or redeclared any where

u="udfiuuiuiui"
l=900
b=true
console.log( "typ of u --",typeof(u));
console.log( "typ of l --",typeof(l));
console.log( "typ of b --",typeof(b));
l1=
n=null
console.log('n type l1 type:',typeof(null),typeof(l1));//null is an object ***
let o
console.log("o type ",typeof(o));

/*
var--change any where , print the current one (value)

let--not change within a same scope , does not access out side the scope .

const--constant in any scope. does not change the value any where .
*/
