function FindFrequency(e){    
    e1=e.toLowerCase();
    var og={};
    console.log(e1);

    for(let i=0;i<e.length;i++){
        if(og[e[i].toLowerCase()]) {
            og[e[i].toLowerCase()]=og[e[i].toLowerCase()]+1;
        }else{
            og[e[i].toLowerCase()]=1;
        }
        
    }
    
    for(const i in og){
        console.log(`${i} - ${og[i]}`);
        
    }
}

FindFrequency('AAaBbbecdCERd');
