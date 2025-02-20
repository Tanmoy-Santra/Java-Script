
function pickingNumbers(a) {
  
    let c=new Array(Math.max(...a)+1).fill(0);
    let maxCount=0;
    for(num of a){
      c[num]=c[num]+1;
    }
    for(let i=1;i<c.length;i++){
      maxCount=Math.max(maxCount,c[i]+c[i-1]);
    }
    console.log(c);
    
  return maxCount;
  }

  a=[4 ,6 ,5 ,3 ,3 ,1]
  res=pickingNumbers(a);
  console.log(res);
  