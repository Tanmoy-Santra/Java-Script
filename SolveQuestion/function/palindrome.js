function palindrome(e){
    // const r=e.toString().split("").reverse().join("");
    // if(r==e){
    //     return 'palindrome';
    // }else{
    //     return 'not palindrome';
    // }

   let  s='';

    for(let i=e.length-1;i>=0;i--){
        s=s+e[i];
    }
    console.log(s);
    if(s.localeCompare(e)===0){
        return 'palindrom';
    }else{
        return "not palindrome";
    }
}
console.log(palindrome("mom"));
