document.querySelector('#start').addEventListener('click',function(){
  over=setInterval(intervalId,2000)
})

intervalId=function colorChangeEvent(){
    color=`rgb(${random1(225)}, ${random1(225)},${random1(225)})`
    document.querySelector('body').style.background=color;
}

function random1(num){
    return Math.floor(Math.random()*(num+1))
}
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(over)
})