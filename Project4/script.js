

const random_number=(parseInt(Math.random()*100+1))
console.log(random_number);

const submit=document.querySelector('#btn')
console.log(submit);

const user_input=document.querySelector('#user-input')
console.log(user_input);

const guess_slot=document.querySelector('#prev_guess')
console.log(guess_slot);

const hints=document.querySelector('#hints')
console.log(hints);

const moves=document.querySelector('#moves')
console.log(moves);

const p=document.createElement('p')

let prevGuss=[]
let numGuess=1
let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(user_input.value)
        console.log(guess);
        valiDateGuess(guess)
    })
}
function valiDateGuess(guess){
    if(isNaN(guess)){
        alert("plese enter a valid number !!")
    }
    else if(guess<1){
        alert("plese enter a valid number (more than 1)!!")
    }
    else if(guess>100){
        alert("plese enter a valid number(less than 100) !!")
    }
    else{
        prevGuss.push(guess)
        if(numGuess===11){
            displayGuess(guess);
            displayMsg(`game over. random number was ${random_number}
            `)
            alert(`no moves remaining try again !! number is : ${random_number}`)            
            
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess===random_number){
        displayMsg("You guessed it right !")
        alert("you win the game !!")
        endGame()
    }else if(guess<random_number){
        displayMsg("Number is too low ..")
    }
    else if(guess>random_number){
        displayMsg("Number is too high ..")
    }
    
}
function displayGuess(guess){
    user_input.value=''
    guess_slot.innerHTML+=`${guess} `;
    numGuess++
    moves.textContent=`moves: ${11 - numGuess} out of 10`;
}
function displayMsg(msg){
    hints.innerHTML=`${msg}`
}
function newGame(){
    location.reload()
}
function endGame(){
    user_input.value=''
    user_input.setAttribute('disabled','')     
    newGame()    
}


