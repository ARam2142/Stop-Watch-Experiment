window.onload = function () {
    //grab possible elements needed
    let timerEl = document.getElementById("timer-text")
    let startBtn = document.getElementById("start")
    let restartBtn = document.getElementById("restart");
    let stopBtn = document.getElementById('stop');

    //hold variables of time and set to 0
    let hours = parseInt('0');
    let minutes = parseInt('0');
    let seconds = parseInt('0');
    let first0;

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

        if (seconds < 10) {
            
        }

        timerEl.textContent = hours + ": " + minutes + ": " + seconds;

    }

    //interval IMPORTANT
    let runTheClock;

    //timer is running
    function runTimer() {
        runTheClock = setInterval(timer, 30);;
    }

    //function that will stop timer
    function stopTimer() {
        clearInterval(runTheClock)
    }

    //function will reset timer
    function resetTimer() {
        stopTimer();
        return timerEl.textContent = "00:00:00"
    }

    restartBtn.addEventListener("click", function () {
        resetTimer();
    })

    //button will pause the timer
    stopBtn.addEventListener("click", function () {
        stopTimer();
    })

    //button will start the timer
    startBtn.addEventListener("click", function () {
        runTimer();
    })


}