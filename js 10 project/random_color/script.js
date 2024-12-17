const main_container=document.querySelector(".container");

function RandomColorGeneretor(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`
}

for(let i=0 ;i<50;i++){
    const colorNew=document.createElement("div");
    const Final_color=RandomColorGeneretor();
    colorNew.classList.add("box");
    colorNew.style.backgroundColor=Final_color;

    const colorSpan=document.createElement("span");
    colorSpan.innerText=Final_color;
    colorSpan.classList.add("color-code");
    colorSpan.style.backgroundColor=Final_color;
    colorNew.appendChild(colorSpan);
    
    const colorBtn=document.createElement("button");
    colorBtn.innerText="copy"
    colorBtn.classList.add("copy-btn");

    colorNew.appendChild(colorBtn);

    main_container.appendChild(colorNew);

    colorBtn.addEventListener('click',()=>{
        navigator.clipboard.writeText(Final_color).then(()=>{
            alert(`copied color : ${Final_color}`)
        })
    })


}
