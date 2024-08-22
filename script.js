let timer;
let timeLeft = 600; // Countdown from 10 minutes (600 seconds)
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function countdown() {
    if (timeLeft > 0) {
        timeLeft--;
        updateDisplay(timeLeft);
    } else {
        clearInterval(timer);
        isRunning = false;
        startButton.disabled = false;
    }
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(countdown, 1000);
        isRunning = true;
        startButton.disabled = true;
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        startButton.disabled = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 600; // Reset to 10 minutes
    updateDisplay(timeLeft);
    startButton.disabled = false;
}

// Initialize display
updateDisplay(timeLeft);

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
