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


async function retryPromise(promiseFn, retries) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        // Attempt to execute the promise function
        const result = await promiseFn();
        return result; // If successful, return the result
      } catch (error) {
        // Log the error and retry if attempts are remaining
        console.log(`Attempt ${attempt} failed: ${error.message}`);
        if (attempt === retries) {
          throw new Error(`Failed after ${retries} retries: ${error.message}`);
        }
      }
    }
  }
  
  // Example: An unreliable function that may randomly fail
  async function unreliableFunction() {
    if (Math.random() < 0.5) throw new Error("Failed!");
    return "Success!";
  }
  
  // Call the retryPromise function
  retryPromise(unreliableFunction, 3)
    .then(console.log) // Log "Success!" if it eventually succeeds
    .catch(console.error); // Log error if all retries fail
  