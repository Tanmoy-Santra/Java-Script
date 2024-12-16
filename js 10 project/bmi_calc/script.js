const display_result=document.getElementById("display");
const height=document.getElementById("height-input");
const weight=document.getElementById("weight-input");
const calculate_result=document.getElementById("calculate");

calculate.addEventListener('click',cal);

function cal(){
    const  h=parseFloat(height.value.trim());
    const w=parseFloat(weight.value.trim());

    console.log(h,w);
    const hh=h * h
    console.log(hh);
    
    const bmi = w / hh;
    display_result.innerHTML = bmi;
}