arr=[34,0,2,1,3,22]

function selection(){
    for (let i = 0; i< arr.length-1; i++) {     
        min=i
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j]<=arr[min]){
                min=j;               
            }
            
        }
        temp=arr[min]
        arr[min]=arr[i]
        arr[i]=temp
    }
    console.log(arr);
}
selection()