const a=[1,2,3,4,5,6]

function foo(e,n,s){
    console.log(e,n,s);
   
    if(s==='from last'){
        const l=[];
            for(let i=0;i<e.length;i++){
            if(i>=(e.length-n)){
                l.push(e[i]);
            }
            
        }
        
    return l
    }else if(s==='from first'){
        const l=[];
        for(let i=0;i<e.length;i++){
            if(i<n){
                l.push(e[i]);
            }
            
        }   
        
    return l             
    }
}

console.log(foo(a,4,'from last'));
console.log(foo(a,4,'from first'));
