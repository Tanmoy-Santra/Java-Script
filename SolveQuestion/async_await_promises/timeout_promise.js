// Problem 6: Timeout a Promise
// Write a function promiseWithTimeout(promise, timeout) that rejects the promise if it takes longer than the specified timeout.
// Example:
// const slowPromise = new Promise((resolve) => setTimeout(resolve, 5000, "Done!"));
// promiseWithTimeout(slowPromise, 2000)
//   .then(console.log)
//   .catch(console.error); // Should reject with "Timeout!"

function promiseWithTimeout(promise, timeout) {
    return new Promise((resolve, reject) => {
      // Create a timeout promise that rejects after the specified time
      const timeoutPromise = setTimeout(() => {
        reject(new Error("Timeout!"));
      }, timeout);
  
      // Resolve or reject based on the original promise
      promise
        .then((value) => {
          clearTimeout(timeoutPromise); // Clear timeout if the promise resolves
          resolve(value);
        })
        .catch((error) => {
          clearTimeout(timeoutPromise); // Clear timeout if the promise rejects
          reject(error);
        });
    });
  }
  
  // Example usage:
  const slowPromise = new Promise((resolve) => setTimeout(resolve, 5000, "Done!"));
  
  promiseWithTimeout(slowPromise, 2000)
    .then(console.log) // This won't be called in this case
    .catch(console.error); // Logs: Error: Timeout!
  