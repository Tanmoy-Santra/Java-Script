const plus_btn=document.getElementById("plus");
const minus_btn=document.getElementById("minus");
const val=document.getElementById("countValue");
const refreash_btn=document.getElementById("refreash");

plus_btn.addEventListener('click',updateVal_plus);
minus_btn.addEventListener('click',updateVal_minus);
refreash_btn.addEventListener('click',refreashFunc);

function updateVal_plus(){
    const val=document.getElementById("countValue");
    val.textContent=parseInt(val.textContent)+1;
}
function updateVal_minus(){
    const val=document.getElementById("countValue");
    if(parseInt(val.textContent)>0)
    val.textContent=parseInt(val.textContent)-1;
}

function refreashFunc(){
    const val=document.getElementById("countValue");
    val.textContent=0;
}