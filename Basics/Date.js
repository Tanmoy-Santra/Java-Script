// let myDate=new Date
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);//date is a object

/*1.2024-03-26T14:48:25.971Z
2.Tue Mar 26 2024
3.Tue Mar 26 2024 20:18:25 GMT+0530 (India Standard Time)
4. 26/3/2024, 8:20:29 pm*/

// let myCreatedDate=new Date(2024,5,45,5,6)
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toDateString());
/*15/7/2024, 5:06:00 am
Mon Jul 15 2024 05:06:00 GMT+0530 (India Standard Time)
Mon Jul 15 2024*/

let newDate=new Date("2024-03-26")
// let newDate2=new Date("02-14-2024")
// console.log(newDate.toLocaleString());
// console.log(newDate2.toString());


//===timeStamp====returns the value in mili second
let MyTimeStamp=Date.now()
console.log(MyTimeStamp);
console.log(MyTimeStamp.getTime());
// console.log(Math.floor(Date.now()/1000));

// console.log(newDate.getMonth()+1);//start with 0

// newDate.toLocaleString('default',{
//     weekday:"long",   
// })//we can customize 