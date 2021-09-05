let hour = 0,
  minutes = 0,
  seconds = 0;

let isStarted = false;

let timerIntervalId;

const display = document.getElementById("display");

function updateDisplayText() {
  display.innerHTML = `${hour < 10 ? "0" + hour : hour}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;
}

const toggleTimer = () => {
  isStarted = !isStarted;
  return isStarted;
};

const calculateTime = () => {
  if (seconds < 60) {
    seconds++;
  } else if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes === 60) {
    hour++;
    minutes = 0;
  }

  updateDisplayText();
};

const startStopButton = document.getElementById("startStop");
startStopButton.addEventListener("click", () => {
  const buttonState = toggleTimer();
  if (buttonState) {
    startStopButton.innerHTML = "Stop";
    timerIntervalId = setInterval(calculateTime, 1000);
  } else {
    startStopButton.innerHTML = "Start";
    clearInterval(timerIntervalId);
  }
});

// Hacer que el botón reset pare el contador si esta iniciado y reinicie todo a 0
//
const resetButton = document.getElementById("reset");
resetButton.onclick = function () {
  clearInterval(timerIntervalId);
  hour = 0;
  minutes = 0;
  seconds = 0;

  if (isStarted) {
    toggleTimer();
    startStopButton.innerHTML = "Start";
  }

  updateDisplayText();
};
