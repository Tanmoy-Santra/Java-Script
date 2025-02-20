function Deep_clone(obj){
    return JSON.parse(JSON.stringify(obj));
}

const obj={
    '1': 'A',
     '2': 'B',
      '3': 'C',
       '4': 'D'
}

console.log("before :",obj);

const Deep_clone_obj=Deep_clone(obj);
Deep_clone_obj['1']='U';
console.log(Deep_clone_obj);
console.log("after :",obj);
