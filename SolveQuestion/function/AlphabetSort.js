function  AlphaSort(e){
    e1=e.toLowerCase();
    console.log(e1);
    return e1.split("").sort().join("");
}

console.log( AlphaSort('Apple'));
