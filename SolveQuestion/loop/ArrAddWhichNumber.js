const a=[1,'tyytytyuu','ere',4,5,6,'ioio'];
let sum=0;
a.map((e)=>{
    if(Number.isInteger(e)){
        sum+=e;
    }
})
console.log(sum);

