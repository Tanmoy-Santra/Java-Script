// Problem 3: Sequential vs Parallel Execution
// You have an array of URLs:

// const urls = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
//   "https://jsonplaceholder.typicode.com/posts/3",
// ];
// Fetch the data sequentially (one after the other).
// Fetch the data in parallel (all at once).
// Compare the time taken for both operations.

const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];
async function SequentialFetch(urls){
    results=[];
    startTime=performance.now();
    for(let url of urls){
        let response=await fetch(url);
        results.push(await response.json());
    }
    endTime=performance.now();
    console.log(`Time for SequentialFetch : ${endTime-startTime} ms`);   
    return results; 
}


async function fetchInParallel(urls) {
    const startTime = performance.now();
    const responses = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
    const endTime = performance.now();
    console.log("Parallel Fetch Time:", endTime - startTime, "ms");
    return responses;
  }



(async function  compareFetchMethods(){
    const sequentialFetchResult=await SequentialFetch(urls);
//console.log(sequentialFetchResult);
    
    const fetchInParallelResult=await fetchInParallel(urls);
   // console.log(fetchInParallelResult);

})();

