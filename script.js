const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

// Function to update and display the current time
const showTime = () => {
    let date = new Date();

    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    // Pad single-digit hours, minutes, and seconds with leading zeros
    let formattedTime = `${hr.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    // Update the time element's content
    time.innerHTML = formattedTime;

    console.log("hours: " + hr + " mins: " + mins + " secs: " + secs);
};

// Call showTime immediately and then every 1000 milliseconds (1 second)
document.addEventListener('DOMContentLoaded', () => {
    showTime(); // Call it immediately to show the initial time
    setInterval(showTime, 1000);
});


hr = hr < 10 ? `0${hr}` : hr;
mins = mins < 10 ? `0${mins}` : mins;
secs = secs < 10 ? `0${secs}` : secs;

time.innerHTML = `${hr}: ${mins} : ${secs}`;

timeformat.innerHTML = hr>12 ? "PM" : "AM";



