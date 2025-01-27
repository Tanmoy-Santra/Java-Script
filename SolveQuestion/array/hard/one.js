
// 9. Maximum Subarray Sum (Kadane's Algorithm)
// Problem: Find the contiguous subarray with the maximum sum.

// Example: Input:
// arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output:
// Maximum Sum: 6
// Subarray: [4, -1, 2, 1]

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let maxSum = Number.MIN_SAFE_INTEGER;
let currentSum = 0;
let start = 0;
let end = 0;
let tempStart = 0;

for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > maxSum) {
        maxSum = currentSum;
        start = tempStart;
        end = i;
    }

    if (currentSum < 0) {
        currentSum = 0;
        tempStart = i + 1;
    }
}

let subarray = arr.slice(start, end + 1);
console.log("Maximum Sum:", maxSum);
console.log("Subarray:", subarray);



// 10. Trapping Rain Water
// Problem: Find the amount of rainwater trapped between bars.

// Example: Input:
// height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// Output:
// Trapped Water: 6

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let left =[];
let right=[];
let res=0;
let n=height.length;
left[0]=height[0];
for(let i=1;i<n;i++){
    left[i]=Math.max(left[i-1],height[i]);    
}
right[n-1]=height[n-1];
for(let i=n-2;i>=0;i--){
    right[i]=Math.max(right[i+1],height[i]);    
}

for(let j=0;j<=n-1;j++){
    res+=Math.min(left[j],right[j])-height[j];
}
console.log(res, ' units');



// 11. Smallest Missing Positive Integer
// Problem: Find the smallest positive integer missing from an unsorted array.

// Example: Input:
// arr = [3, 4, -1, 1]
// Output:
// Smallest Missing: 2

// 12. Product of Array Except Self
// Problem: Return an array such that each element is the product of all other elements without using division.

// Example: Input:
// arr = [1, 2, 3, 4]
// Output:
// [24, 12, 8, 6]