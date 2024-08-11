arr=[1,0,3,2,4]

function insertion(){
    for (let i = 1; i < arr.length; i++) {
        current=arr[i]      
        j=i-1
        while (j>=0 && current<arr[j]) {
            arr[j+1]=arr[j]
            j--;
        }
        arr[j+1]=current
        
    }
    console.log(arr);
    
}

insertion()