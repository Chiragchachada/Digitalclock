

function displayTime(){
    const currentDate = new Date();
    console.log("Function to display time", currentDate)
    const currentTime = document.querySelector("#current-time");
    currentTime.innerText = currentDate.toLocaleTimeString("en-US",{
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
    });
    
}
const timer = setInterval(displayTime, 1000);

function stopClock(){
    clearInterval(timer);

}
