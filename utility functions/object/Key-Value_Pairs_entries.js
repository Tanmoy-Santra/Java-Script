function getKeyValuePairs(obj){
    return Object.entries(obj)
}

const obj={
    1:'A',
    2:'B',
    3:'C',
    4:'D'
}

console.log(getKeyValuePairs(obj));