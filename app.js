let hour = 0, minutes = 0, seconds = 0

let isStarted = false

const toggleTimer = () => {
    isStarted = !isStarted
    return isStarted
}

const calculateTime = () => {
    if (seconds < 60) {
        seconds++
    } else if (seconds === 60) {
        minutes++
        seconds = 0
    }

    if (minutes === 60) {
        hour++
        minutes = 0
    }

    document.getElementById("display").innerHTML = `${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}

const incrementTimer = setInterval(calculateTime, 1000)
clearInterval(incrementTimer)

const startStopButton = document.getElementById("startStop")
startStopButton.addEventListener('click', () => {
    const buttonState = toggleTimer()
    if (buttonState) {
        startStopButton.innerHTML = "Stop";
        incrementTimer()
    } else {
        startStopButton.innerHTML = "Start";
        clearInterval(incrementTimer)
    }
});

/*  */ 