// Problem 1: Fetch and Combine Data
// You are given two APIs:

// Users API: https://jsonplaceholder.typicode.com/users
// Posts API: https://jsonplaceholder.typicode.com/posts
// Fetch the users and their posts, and display a combined result like this:

// [
//   {
//     "userId": 1,
//     "userName": "Leanne Graham",
//     "posts": [
//       { "id": 1, "title": "Post 1" },
//       { "id": 2, "title": "Post 2" }
//     ]
//   },
//   ...
// ]

// fetch("https://sonplaceholder.typicode.com/users")
// .then((response) => {
//     // Check if the response is ok (status code 200-299)
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json(); // Parse JSON from the response
//   })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>console.log(err));

console.log('---------------------------------------------------------------');

// async function fetchData(){
//     try{            
//         const response=await fetch("https://jsonplaceholder.typicode.com/posts") ;         
//             if(!response.ok){
//                throw new Error('http response problem ERROR status : ',response.status);            
//             }
//             const data=await response.json();
//             console.log(data);
                   
//     }catch(err){
//         console.error(err);
//     }

// }
// fetchData();

// async function UserPostDataFetch() {
//     try{
        
//         const[userResponse,postResponse] =await Promise.all([
//             fetch("https://jsonplaceholder.typicode.com/users"),
//             fetch("https://jsonplaceholder.typicode.com/posts")
//         ])

//         if (!userResponse.ok || !postResponse.ok) {
//             throw new Error("Failed to fetch data from APIs");
//           }

//         const userData=await userResponse.json();
//         const postData=await postResponse.json();

//         console.log(userData);
//         console.log("---------------------------------------");
//         console.log("---------------------------------------");
        
//         console.log(postData);


          
//     // Combine users and their posts
//     const result = userData.map(user => {
//         return {
//         userId: user.id,
//         userName: user.name,
//         posts: postData
//             .filter(post => post.id === user.id)
//             .map(post => ({ id: post.id, title: post.title }))
//         };
//     });

//   // Log the combined result
//   console.log(result);

//     }catch(err) {
//         console.log(err);
        
//     }
// }
// UserPostDataFetch();


const users = [
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo: { lat: "-43.9509", lng: "-34.4618" }
      },
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies"
      }
    }
  ];
  
  const posts = [
    {
      userId: 9,
      id: 100,
      title: "at nam consequatur ea labore ea harum",
      body: "cupiditate quo est a modi nesciunt soluta\n" +
            "ipsa voluptas error itaque dicta in\n" +
            "autem qui minus magnam et distinctio eum\n" +
            "accusamus ratione error aut"
    },
    {
      userId: 10,
      id: 101,
      title: "other post",
      body: "This is a post by another user"
    }
  ];
  
  const combinedResult = users.map((user) => {
    return {
      userId: user.id,
      userName: user.name,
      posts: posts
        .filter((post) => post.userId === user.id)
        .map((post) => ({ id: post.id, title: post.title }))
    };
  });
  
  console.log(JSON.stringify(combinedResult, null, 2));



// Use async/await to solve the problem.

// Problem 2: Retry Failed Promise
// Write a function retryPromise(promiseFn, retries) that retries an asynchronous operation up to retries times if it fails.

// Example:
// async function unreliableFunction() {
//   if (Math.random() < 0.5) throw new Error("Failed!");
//   return "Success!";
// }

// retryPromise(unreliableFunction, 3)
//   .then(console.log)
//   .catch(console.error);
// // Should retry up to 3 times and log "Success!" or "Failed!"
// Problem 3: Sequential vs Parallel Execution
// You have an array of URLs:

// javascript
// Copy
// Edit
// const urls = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
//   "https://jsonplaceholder.typicode.com/posts/3",
// ];
// Fetch the data sequentially (one after the other).
// Fetch the data in parallel (all at once).
// Compare the time taken for both operations.
// Problem 4: Chaining Promises
// Create a function processData() that does the following:

// Fetch user data from https://jsonplaceholder.typicode.com/users/1.
// Use the userId to fetch their posts from https://jsonplaceholder.typicode.com/posts?userId=1.
// Combine the user details and their posts into a single object and return it.
// Problem 5: Handle Multiple Promises
// Write a function fetchAllData(urls) that takes an array of URLs and:

// Fetches all URLs in parallel.
// Returns an array of results.
// If one fetch fails, it should not affect the others.
// Example:

// javascript
// Copy
// Edit
// fetchAllData([
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
//   "invalid-url"
// ]).then(console.log);
// Problem 6: Timeout a Promise
// Write a function promiseWithTimeout(promise, timeout) that rejects the promise if it takes longer than the specified timeout.

// Example:

// javascript
// Copy
// Edit
// const slowPromise = new Promise((resolve) => setTimeout(resolve, 5000, "Done!"));

// promiseWithTimeout(slowPromise, 2000)
//   .then(console.log)
//   .catch(console.error); // Should reject with "Timeout!"
// Problem 7: Asynchronous Map Function
// Write an asynchronous version of Array.map() called asyncMap. It should take an array and an asynchronous callback function, and return a new array with the results.

// Example:

// javascript
// Copy
// Edit
// async function asyncDouble(x) {
//   return new Promise((resolve) => setTimeout(() => resolve(x * 2), 1000));
// }

// asyncMap([1, 2, 3], asyncDouble)
//   .then(console.log); // [2, 4, 6]
// Problem 8: Event Loop Challenge
// What will be the output of the following code? Explain why.

// javascript
// Copy
// Edit
// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");
