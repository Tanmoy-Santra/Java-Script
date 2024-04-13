document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    console.log(height);
    console.log(weight);

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please provide a valid height.';
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please provide a valid weight.';
    } else {
        const heightInMeters = height / 100; // Convert height to meters
        const bmi = weight / (heightInMeters * heightInMeters);
        result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
    }
});
