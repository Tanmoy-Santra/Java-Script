const sentence="Tanmoy is a good coder"
// const l=sentence.split(' ')
// console.log(l);
// const l2=[]
// l.forEach(element => {    
//     l2.push(element.split('').reverse().join(''));
// });

// console.log(l2.toString().replaceAll(',',' '));
 

const ss=sentence.split(" ").map((word)=>{
    return word.split("").reverse().join("");
})

console.log(ss.join().replaceAll(',',' '));
