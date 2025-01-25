// Easy
// Find the largest and smallest elements in an array.

// Example: Input: [3, 1, 4, 1, 5], Output: Largest = 5, Smallest = 1.
// Tip: Use Math.max(...arr) and Math.min(...arr) or iterate through the array.

let arr=[3, 1, 4, 1, 5];
console.log(`max = ${Math.max(...arr)} min=${Math.min(...arr)}`);

// Reverse an array.
// Example: Input: [1, 2, 3], Output: [3, 2, 1].
// Tip: Use arr.reverse() or iterate and swap elements.

let arr2=[3, 1, 4, 1, 5];
console.log(arr.reverse());


// Check if an array is a palindrome.
// Example: Input: [1, 2, 2, 1], Output: true.
// Tip: Compare the array to its reversed version.

let arr3=[1,2,2,1];
console.log(arr3.includes(...(arr3.reverse())));

// Find the second largest element.
// Example: Input: [1, 3, 4, 5], Output: 4.
// Tip: Use sorting or maintain two variables while iterating.

let arr4=[1,3,0,8,5];
max=arr4[0];
max2=arr4[0];
arr4.forEach(element => {
    if(element>max){
        max2=max;
        max=element;
    }else if (element > max2 && element < max) {
        max2 = element; 
    }
});

console.log(max2);


// Remove duplicates from an array.
// Example: Input: [1, 2, 2, 3], Output: [1, 2, 3].
// Tip: Use a Set: Array.from(new Set(arr)).

let arr5= [1, 2, 2, 3];
// arr5=Array.from(new Set(arr5));
// console.log(arr5);

arr5=arr5.reduce((curr,acc)=>{
    if(!curr.includes(acc)){
        curr.push(acc);
    }
    return curr;
},[])
console.log(arr5);


