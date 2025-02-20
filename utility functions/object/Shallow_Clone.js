function Shallow_Clone(obj){
    return {...obj};
}

const obj={
    1:'A',
    2:'B',
    3:'C',
    4:'D'
}

console.log('before : ',obj);

const clone_obj=Shallow_Clone(obj);
clone_obj[1]='O';
console.log(clone_obj);
console.log('after : ',obj);

