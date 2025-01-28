// 1. Basic Retry Logic
// Problem: Write a function that attempts to fetch data from a URL using the fetch() API. Retry up to 3 times if the network request fails.





// Hint:
// Use the retryPromise function to retry the request on failure.
// // Make sure to log the error messages.
async function retryPromise(promiseFn,retries) {
    for(let attempt=1;attempt<=retries;attempt++){
        try {
            const result=await promiseFn();
            return result;            
        } catch (error) {
            console.log(`Attempt ${attempt} failed: ${error.message}`);
            if (attempt === retries) {
              throw new Error(`Failed after ${retries} retries: ${error.message}`);
            }            
        }

    }
}



async function fetchData() {
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
        console.log('ERROR status : ',response.status);        
    }

    return response.json();

}

retryPromise(fetchData,3)
.then((data)=>{
    console.log(JSON.stringify(data,null,2));    
})
.catch((err)=>{
    console.log('some went wrong : ',err.message);
    
})