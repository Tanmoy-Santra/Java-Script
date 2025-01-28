// Problem 5: Handle Multiple Promises
// Write a function fetchAllData(urls) that takes an array of URLs and:
// Fetches all URLs in parallel.
// Returns an array of results.
// If one fetch fails, it should not affect the others.
// Example:

// fetchAllData([
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
//   "invalid-url"
// ]).then(console.log);


async function fetchAllData(urls) {
   const result=await Promise.all(
    urls.map(async(url)=>{
        try {
            const response=await fetch(url)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
            const data=await response.json();
            return data;
        } catch (error) {
            console.log('something went wrong in : ',url);  
            
        }
    })
   )  
   return result;
}


fetchAllData([
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "invalid-url",
  ]).then(console.log);