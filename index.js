// window.onload = function () {
//     //grab possible elements needed
//     const timerEl = document.getElementById("timer-text")
//     const startBtn = document.getElementById("start")
//     const restartBtn = document.getElementById("restart");
//     const stopBtn = document.getElementById('stop');

//     //hold variables of time and set to 0
//     let hours = parseInt('0');
//     let minutes = parseInt('0');
//     let seconds = parseInt('0');
//     let time;

//     function makeTwoNumbers(num) {
//         if (num < 10) {
//             return "0" + num
//         }
//         return num
//     }
    
//     //timer
//     let timer = () => {
//         seconds++
//         //console.log(seconds)
//         if (seconds == 60) {
//             minutes++
//             seconds = 0;
//             hours = 0
//         }
//         if (minutes == 60) {
//             hours++
//             minutes = 0;
//             hours = 0;
//         }
//         timerEl.textContent = makeTwoNumbers(hours)+ ": " + makeTwoNumbers(minutes) + ": " + makeTwoNumbers(seconds);
//     }
    
//     let runTheClock;
    
//     //timer is running
//     function runTimer() {
//         runTheClock = setInterval(timer, 20);;
//     }
    
//     //function that will stop timer
//     function stopTimer() {
//         clearInterval(runTheClock)
//     }
    
//     //function will reset timer
//     function resetTimer() {
//         //time--;
//         timerEl.textContent;
//         if (time === 0) {
//             stopTimer();
//             time = 0
//         }
//         return timerEl.textContent = "00:00:00"
//     }
    
//     restartBtn.addEventListener("click", function () {
//         resetTimer();
//     })

//     //button will pause the timer
//     stopBtn.addEventListener("click", function () {
//         stopTimer();
//     })

//     //button will start the timer
//     startBtn.addEventListener("click", function () {
//         runTimer();
//     })


// }

//help from developer on stackoverflow
window.onload = function() {
    const timerEl = document.getElementById("timer-text")
    const startBtn = document.getElementById("start")
    const restartBtn = document.getElementById("restart");
    const stopBtn = document.getElementById('stop');
    
    let runTheClock;
    let seconds = 0;
    render(seconds);
    
    function makeTwoNumbers(num) {
        return ((num < 10) ? "0" : "") + num;
    }
    
    function tick() {
        seconds++;
        render(seconds);
    }
    
    function render(secs) {
    
        const hours = Math.floor(secs / 3600);
        const minutes = Math.floor(secs / 60) - (hours * 60);
        const seconds = secs % 60;
    
        const val = [hours, minutes, seconds].map(makeTwoNumbers).join(":");
        console.log(val);
        timerEl.textContent = val;
    }
    
    function runTimer() {
        runTheClock = setInterval(tick, 30);
    }
    
    function stopTimer() {
        clearInterval(runTheClock)
    }
    
    function resetTimer() {
        seconds = 0;
        render(seconds);
    }
    
    restartBtn.addEventListener("click", function(){
        stopTimer();
        resetTimer();
    });

    stopBtn.addEventListener("click", function() {
        stopTimer();
    });

    startBtn.addEventListener("click", function () {
        runTimer();
    });
}
