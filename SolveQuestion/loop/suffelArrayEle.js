var a=[1,2,3,4,5,6];

function suffelArr(e){
    let randomNumber1=Math.floor(Math.random()*(e.length));
    let randomNumber2=Math.floor(Math.random()*(e.length));
    console.log(randomNumber1);
    temp=e[randomNumber1];
    e[randomNumber1]=e[randomNumber2];
    e[randomNumber2]=temp;
    return e;
}


console.log(suffelArr(a));
