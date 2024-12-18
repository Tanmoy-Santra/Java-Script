const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('min');
const secondHand = document.getElementById('sec');

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDeg = ((seconds / 60) * 360) + 90; // Start at 90deg for alignment
    const minutesDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursDeg = ((hours % 12) / 12 * 360) + ((minutes / 60) * 30) + 90;

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initialize clock on load
