const a=[12,12,23,12,12,56,56,56,56,56,56,7,7,7,7,7,7,8,12,23,7];

function findMostFrequent(e){
    ee={};
    
    let max=0 ,max_ele;
    for(let i=0;i<e.length;i++){        
        if(ee[e[i]]){
            ee[e[i]]+=1;            
        }else{
            ee[e[i]]=1;
        }
        if(max< ee[e[i]]){
            max=ee[e[i]];  
            max_ele=e[i];
        }
    }

    return max_ele;
}


console.log(findMostFrequent(a));
