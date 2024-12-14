document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('palindromeForm');
    const inputStringField = document.getElementById('string');
    const result = document.getElementById('result');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission from refreshing the page
        const inputString = inputStringField.value.trim();
        console.log(inputString);

        if (inputString === '') {
            result.textContent = 'Please enter a valid string.';
            return;
        }

        const isPalindrome = inputString === inputString.split('').reverse().join('');
        result.textContent = isPalindrome
            ? `"${inputString}" is a palindrome!`
            : `"${inputString}" is not a palindrome.`;
    });
});
