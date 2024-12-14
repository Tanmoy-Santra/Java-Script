const RedSlider=document.getElementById("redSlider");
const GreenSlider=document.getElementById("greenSlider");
const BlueSlider=document.getElementById("blueSlider");

const RedSpan=document.getElementById("redValue");
const GreenSpan=document.getElementById("greenValue");
const BlueSpan=document.getElementById("blueValue");

const Color=document.getElementById("colorBox");
const CopyColorValue=document.getElementById("inputType");
const ColorCopyButton=document.getElementById("copyButton");

RedSlider.addEventListener('input',updateColor);
GreenSlider.addEventListener('input',updateColor);
BlueSlider.addEventListener('input',updateColor);

ColorCopyButton.addEventListener('click',copyColor);

function updateColor(){

    const red_color=RedSlider.value;
    const green_color=GreenSlider.value ;
    const blue_color=BlueSlider.value;

    console.log(red_color,green_color,blue_color);
    

    const final_color=`rgb(${red_color},${green_color},${blue_color})`
    console.log(final_color);

    Color.style.backgroundColor=final_color;

    RedSpan.textContent=red_color;
    GreenSpan.textContent=green_color;
    BlueSpan.textContent=blue_color;

    CopyColorValue.textContent=final_color;
    

}


updateColor();

function copyColor(){
    const red_color=RedSlider.value;
    const green_color=GreenSlider.value ;
    const blue_color=BlueSlider.value;

    console.log(red_color,green_color,blue_color);
    

    const final_color=`rgb(${red_color},${green_color},${blue_color})`
    console.log(final_color);

    navigator.clipboard.writeText(final_color)
    .then(()=>{
        alert("Color Coppied " +final_color);
    })


}

