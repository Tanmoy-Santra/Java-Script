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