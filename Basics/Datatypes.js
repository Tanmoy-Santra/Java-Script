{let i=0
console.log("within another scope",i);}
//let i=1 -- we cannot change the let variable withi in a scope
{//{} -> is called scope we can use the same named variable .
    let i=9
    console.log("inside the another scope");
    console.log(i);
}

// the old js versionpeople use var likewis let , the problem is there is same named var are change aany where so now we use let instade of var

var j=78
var j=5 //j value changes in to the curent value
console.log(j)

const e=90
console.log( "typ of e --",typeof(e));
console.log("type of i--",typeof(i));//it returns undefind because the i assign in the another scope and we print is outside the scope
console.log("type of j--",typeof(j));
// {
//     var e;
// }
//const e=0 we cannot change  the value of const within the same scope or outside the scope the value remain unchanged.

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