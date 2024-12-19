// function ArrayOrNot(e){
//     console.log(typeof(e));    
// }

// ArrayOrNot([1,2,3]);
// ArrayOrNot({1:3,2:4})

// //output
// //object
// //object


function ArrayOrNot(e){
    console.log(Array.isArray(e));    
}

ArrayOrNot([1,2,3]);
ArrayOrNot({1:3,2:4})

//output
// true
// false