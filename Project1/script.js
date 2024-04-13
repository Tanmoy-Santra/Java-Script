const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
console.log(buttons);
console.log(body);

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        body.style.backgroundColor = e.target.id;
    });
});
