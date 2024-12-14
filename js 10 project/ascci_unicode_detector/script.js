const char = document.getElementById("char");
const submit_btn = document.getElementById("submit-btn");
const result = document.getElementById("result");

submit_btn.addEventListener('click', detect);

function detect() {
    const c = char.value.trim(); // Use .value to get the input field's value
    if (c === "") {
        result.textContent = "Please enter a character.";
    } else if (/^[\x00-\x7F]+$/.test(c)) {
        result.textContent = "ASCII character";
    } else if (/[^\x00-\x7F]/.test(c)) {
        result.textContent = "Unicode character";
    } else {
        result.textContent = "Invalid input.";
    }
}
