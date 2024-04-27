//concatination
FirstName="Tanmoy "
LastName="santra"
let name="tanmoy123"
Name=FirstName+LastName
console.log(Name);
//trim
Str="                   ok                "
TrimedStr=Str.trim()
console.log(TrimedStr);

//slice
console.log(Name.slice(0,2))//print first 2 cahrecter
console.log(name.slice(2))//print last (length-2) cahrecter  nmoy123
console.log(name.slice(0,-2))//tanmoy1
console.log(name.slice(-2))//print last 2 chaarecter  23
console.log(name.slice(0,-2))//print tanmoy1

//substring
subName=Name.substring(0,9)
console.log(subName)
//n1=name.substring(0,8)
//'tanmoy12' ........returns a substring

//match
text = "The rain in SPAIN stays mainly in the plain";
result = text.match("ain");
console.log(typeof result) //output..object
console.log(result.index)//5

//replace
let text1 = "Visit Microsoft!";
let res = text1.replace("Microsoft", "W3Schools");
console.log(res);

//split
myArray="tanmoy is a boy"
myArray = myArray.split(" ",3);//(3) ['tanmoy', 'is', 'a']
console.log(myArray);
console.log(typeof myArray);//object

//charAt
let text2 = "HELLO WORLD";
let letter2 = text2.charAt(0);//charecter at 0th position 
console.log(letter2);

//indexOf
let text3 = "Hello world, welcome to the universe.";
let result3 = text3.indexOf("welcome");
console.log(result3)//13

//search

let text4 = "Mr. Blue has a blue house";
let position4 = text4.search("Blue");
console.log(position4);//4

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
console.log(text7);//HELLO returns the ascii value of thr corrsponding numbers
