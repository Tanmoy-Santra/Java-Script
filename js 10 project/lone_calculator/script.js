const ammount=document.getElementById("demand");
const time=document.getElementById("time");
const interest=document.getElementById("interest");
const btn=document.getElementById("btn");
const result=document.getElementById("result");

btn.addEventListener('click',()=>{
    const P=parseFloat(ammount.value.trim());
    const n=parseFloat(time.value.trim());
    const r=parseFloat(interest.value.trim());
   

    const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        
        // Total interest
        const totalInterest = (M * n) - P;
        
        // Display results
        result.innerHTML = `
            <p>Monthly Payment: ${M.toFixed(2)}</p>
            <p>Total Interest: ${totalInterest.toFixed(2)}</p>
        `;
    
})
