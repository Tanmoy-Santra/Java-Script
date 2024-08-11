const course={
    course_name:"js in hindi",
    price:'999',
    instructor:"tanmoy"
}
//object de-structured
const {price}=course
console.log(price);
//let change the name of price to coursePrice
const {price:coursePrice}=course
console.log(coursePrice);

// const navbar=({company})=>{

// }
// navbar(company='top')---in react we use this object de-structured

//*******API concept********
//JSON
// {
//     "name":"tom",
//     "email":"ok@123google.com",
//     "id":"1qwe"
// }

//some time the json file returns object type or array types

// [
//     {},
//     {},
//     {}
// ]
