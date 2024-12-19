const a=[1,2,3,4,5]
var sum=0;
// for(let i=0;i<a.length;i++){
//     sum=sum+a[i];
// }


a.map(value => sum += value);

console.log(sum);


