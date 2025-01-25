// Medium
// Find the missing number in a sequence.
// Example: Input: [1, 2, 4, 5], Output: 3.
// Tip: Use the sum formula: s=n(n+1)/2
// where n is the largest number.

let arr=[1,3,4,5];
let n=Math.max(...arr);
let s=n*(n+1)/2;
let sum = arr.reduce((acc,curr)=>{
    console.log(curr,"curr ");
    console.log(acc,"acc ");    
    acc=curr+acc;
    return acc;
},0)

console.log('missng number is',s-sum);


// Find all pairs in an array that sum to a specific value.
// Example: Input: [1, 2, 3, 4, 5], Target: 5, Output: [(1, 4), (2, 3)].
// Tip: Use a Map to store complements.

let arr2=[1, 2, 3, 4, 5];
const t=5;
let f=0,r=arr2.length-1,res=[];
let find=false;
while(f<r){
    pairSum=arr2[f]+arr2[r];
    if(pairSum>t){
        r--;
    }else if(pairSum<t){
        f++;
    }else{
        res.push(arr2[f]);
        res.push(arr2[r]);
        find=true;        
    }

    
}
if(find){
    console.log(res);        
}
   



// Rotate an array by k positions.

// Example: Input: [1, 2, 3, 4, 5], k = 2, Output: [4, 5, 1, 2, 3].
// Tip: Use slicing: arr.slice(-k).concat(arr.slice(0, -k)).
// Find the intersection of two arrays.

// Example: Input: [1, 2, 3], [2, 3, 4], Output: [2, 3].
// Tip: Use a Set for faster lookups.
// Find the first repeating element in an array.

// Example: Input: [1, 2, 3, 2, 1], Output: 2.
// Tip: Use a Set to track seen elements.