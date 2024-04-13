const clock_time=document.querySelector('#clock-time')
setInterval(function(){

    const time=new Date().toLocaleTimeString();
    
    clock_time.innerHTML=time

},1000)    
