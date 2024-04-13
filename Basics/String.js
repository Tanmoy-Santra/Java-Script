//concatination
FirstName="Tanmoy "
LastName="santra"
Name=FirstName+LastName
console.log(Name);
//trim
Str="                   ok                "
TrimedStr=Str.trim()
console.log(TrimedStr);

//slice
console.log(Name.slice(0,2))//first 2 to 5th cahrecter
console.log(Name.slice(4))//last 2 to 5th cahrecter

//substring
subName=Name.substring(0,9)
console.log(subName)

//match
text = "The rain in SPAIN stays mainly in the plain";
result = text.match("ain");
console.log(typeof result)
//replace
let text1 = "Visit Microsoft!";
let res = text1.replace("Microsoft", "W3Schools");
console.log(res);
//split
myArray="tanmoy is a boy"
myArray = myArray.split(" ",3);
console.log(myArray);
console.log(typeof myArray);
//charAt
let text2 = "HELLO WORLD";
let letter2 = text2.charAt(0);
console.log(letter2);

//indexOf
let text3 = "Hello world, welcome to the universe.";
let result3 = text3.indexOf("welcome");
console.log(result3)

//search

let text4 = "Mr. Blue has a blue house";
let position4 = text4.search("Blue");
console.log(position4);

//startWith
let text5 = "Hello world, welcome to the universe.";
if(text5.startsWith("Hello")){
    console.log("fine");
}
//endsWith
if(text5.endsWith(".")){
    console.log("fine");
}
//fromCharCode
let text7 = String.fromCharCode(72, 69, 76, 76, 79);
console.log(text7);