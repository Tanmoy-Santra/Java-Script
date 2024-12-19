function rev(e){
    console.log(e);    
    s='';
    // return e.toString().split("").reverse().join("");
    while(e>0){
        rem=e%10;       
        s=s+rem;
        e=Math.floor(e/10);
    }
    return s;
}

console.log(rev(122));
