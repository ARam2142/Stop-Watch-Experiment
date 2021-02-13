//create stop watch timer
//create functionality for start stop and reset buttons
//use set Interval clear in interval
//format time in hh:mm:ss
//use date object to set a time and find 
//plan for 4 functions, function startTime(), function pause(), function resetTime(), function displayTime()

//grab possible elements needed
var timerEl = document.getElementById("timer-text")
var startBtn = document.getElementById("start")
var restartBtn = document.getElementById("restart");
var stopBtn = document.getElementById("stop");

//hold variables of time and set to 0
let hours = parseInt('00');
let minutes = parseInt('00');
let seconds = parseInt('00');
let tenth = 0
//let milliseconds =0;

//timer
function timer() {
    seconds++
    //console.log(seconds)
    if (seconds == 60) {
        minutes++
        seconds = 0;
        hours = 0
    }
    if (minutes == 60) {
        hours++
        minutes = 0;
        hours = 0;        
    }
    
    timerEl.textContent = hours + ": " + minutes + ": " + seconds;

    if(seconds < 10) {
        return "0" + seconds
    }
    
}

function timerRunning() {
    var t 
    t = setInterval(timer, 1000);
    console.log(t)
}
timerRunning()
