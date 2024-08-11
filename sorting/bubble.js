let arr=[23,45,2,1,3]
let temp
function bubble(){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j]>arr[j+1]) {
                   temp=arr[j]
                   arr[j]=arr[j+1]
                   arr[j+1]=temp
            }                     
            
        }
        
    }
    console.log(arr);
    
}
bubble()