let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById("display");
const startPauseBtn = document.getElementById("startPause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const laps = document.getElementById("laps");

function updateDisplay() {
  const time = Date.now() - startTime + elapsedTime;
  const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, '0');
  const minutes = Math.floor((time / (1000 * 60)) % 60).toString().padStart(2, '0');
  const hours = Math.floor(time / (1000 * 60 * 60)).toString().padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${seconds}`;
}

function playAudio(soundType) {
  const audio = new Audio(`audio/${soundType}.mp3`);
  audio.play();
}

startPauseBtn.addEventListener("click", () => {
  if (!isRunning) {
    startTime = Date.now();
    timerInterval = setInterval(updateDisplay, 1000);
    startPauseBtn.textContent = "Pause";
    startPauseBtn.style.backgroundColor = "#f1c40f";
    playAudio('start');
    isRunning = true;
  } else {
    clearInterval(timerInterval);
    elapsedTime += Date.now() - startTime;
    startPauseBtn.textContent = "Start";
    startPauseBtn.style.backgroundColor = "#4c66f1";
    playAudio('pause');
    isRunning = false;
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  display.textContent = "00:00:00";
  elapsedTime = 0;
  isRunning = false;
  startPauseBtn.textContent = "Start";
  startPauseBtn.style.backgroundColor = "#4c66f1";
  laps.innerHTML = "";
  playAudio('reset');
});

lapBtn.addEventListener("click", () => {
  if (isRunning) {
    const lapTime = display.textContent;
    const lapLi = document.createElement("li");
    const lapText = document.createElement("span");
    lapText.textContent = `Lap ${laps.children.length + 1}`;
    const lapTimeText = document.createElement("span");
    lapTimeText.classList.add("lap-time");
    lapTimeText.textContent = lapTime;
    lapLi.appendChild(lapText);
    lapLi.appendChild(lapTimeText);
    laps.appendChild(lapLi);
    playAudio('lap');
  }
});

