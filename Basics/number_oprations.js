 //================numbers===============
const score=200
console.log(score);

const balance=new Number(100)
console.log(balance);//dirctly converted into intiger

console.log(balance.toString().length);
//returns the length of the balance
console.log(balance.toFixed(1));
//output 100.0

const otherNumber=1123.8966
console.log(otherNumber.toPrecision(5));
//output 1123.9

const hundreds=1000000000
console.log(hundreds.toLocaleString('en-IN'));//return the indian hundreds method output 1,00,00,00,000

//================maths===============
 console.log(Math);//returns Object type ' Object [Math] {} '
 console.log(Math.abs(-9));
 console.log(Math.round(9.87));
 console.log(Math.ceil(9.87));//choose top value
 console.log(Math.floor(9.87));//choose low value
 console.log(Math.min(2.9,34,2.564,7));
 console.log(Math.max(2.9,34,2.564,7));

 //****************random ka khel****** */
 console.log(Math.random());//between 0 to 1 default
 //if i need value between 1 to 10
 console.log(Math.floor(Math.random()*10)+1);
 // i need the value with in range

 const min=10
 const max=20

 console.log(Math.floor(Math.random() * (max - min +1))+min);
