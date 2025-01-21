let myPromise=new Promise(function(res,rej){
    let c=1;
    if(c<9){
        rej('reject');
    }else{
        res('resolve');
    }
});

myPromise.then(
    function(value){
        console.log(value);
    },
    function(error){
        console.log(error);
    }
);