// Problem 4: Chaining Promises
// Create a function processData() that does the following:

// Fetch user data from https://jsonplaceholder.typicode.com/users/1.
// Use the userId to fetch their posts from https://jsonplaceholder.typicode.com/posts?userId=1.
// Combine the user details and their posts into a single object and return it.

async function processData(){
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/users/1");
    const userData=await response.json();
        const response2=await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
        const postData=await response2.json();
        const result={
            user:userData,
            post:postData
    }    
      return result;
    } catch (error) {
        console.error("Error processing data:", error);
        throw error; 
    }
}

processData()
.then(result=>console.log(result))
.catch(error=>console.log(error))
