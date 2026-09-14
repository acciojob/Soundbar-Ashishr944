const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const soundName = this.getAttribute("data-sound");

        currentAudio = new Audio("./sounds/" + soundName + ".mp3");
        currentAudio.play();
    });
});

stopButton.addEventListener("click", function () {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});