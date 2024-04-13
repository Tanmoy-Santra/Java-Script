//Immediately Invocked Function Expressions (IIfE)

(function foo(){//named IIFE
        console.log("DB connected");
    }
)();//this ; is importent  to execute the next block

( (name) => {
    console.log(`ok fine ${name}`);
})("tom")

//******NOTE : interview question  how w can use 2 IIFE in sie a file ans. semicolon is must to execute 2nd IIFE****