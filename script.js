//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
cont stopButton = dodument.querSelectorAll(".stop");

let currentAudio = null;
buttons.forEach(function (button){
	button.addEventListner("click", function() {
		if(currentAudio){
			currentAudio.pause();
			currentAudio.currentTime = 0;
		}
		const soundName = this.getAttribute("data-sound");

		currentAudio = new Audio("./sounds/" + soundName + ".mp3");
		currentAudio.play();
	});
});

stopButton.addEventListener("click", function(){
	if(currentAdio){
		currentAudio.pause();
		currentAudio.currentTime = 0;
	}
});







