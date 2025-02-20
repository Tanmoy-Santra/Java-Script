const obj1={
    name:'tanmoy',
    roll:787,
    firstAddress:'abc',
    secondAddress:'xyz',
    dist:'hooghly',
    state :'',
    pin:4545,
    totalMarks:676,
    subject:{
        english:334,
        dsa:3434,
        os:90,
        math:56
    }

}

const obj2=[
    {dist:'hooghly'},
    {state :''},
    {pin:4545},
    {totalMarks:676},
    {subject:{
        english:334,
        dsa:3434,
        os:90,
        math:56}
    }
]

console.log(obj2);


for (const [key, value] of Object.entries(obj1)) {
    if (typeof(value)==='object') {        
        for(const [key1,value1] of Object.entries(value)){
            console.log(`${key1}: ${value1}`);
        }
    }else{
        console.log(`${key}: ${value}`);
    }
  }