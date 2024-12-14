window.addEventListener("load", checkConnectionStatus);

function checkConnectionStatus() {
    const status = document.getElementById("status");
    const ipAddress = document.getElementById("ip");
    const speed = document.getElementById("speed");

    if (navigator.onLine) {
        

        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())   
            
            .then(data => {
                console.log(data);
                
                ipAddress.textContent = data.ip;
                status.textContent = 'Connected';
                // Optionally simulate speed (actual speed test requires more setup)
                speed.textContent = 'Unknown'; // Placeholder for now

                const connection = navigator. connection;
                const Speed=connection?connection.downlink+'Mbps':'Unknown';
                speed.innerText=Speed
            })
            .catch(error => {
                console.error('Error fetching IP:', error);
                status.textContent = 'Disconnected';
                ipAddress.textContent = '-';
                speed.textContent = '-';
            });
    } else {
        status.textContent = 'Disconnected';
        ipAddress.textContent = '-';
        speed.textContent = '-';
    }
}
