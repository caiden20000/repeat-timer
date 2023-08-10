const settingsElement = document.getElementById("settings");
const durationInput = document.getElementById("duration");
const submitButton = document.getElementById("submit");
const displayElement = document.getElementById("display");
const titleElement = document.getElementsByTagName("title")[0];

var timerInterval = null;
var seconds = null;
var initialTime = null;

submitButton.addEventListener("click", e => {
	const duration = parseInt(durationInput.value);
  if (isNaN(duration)) {
  	clearSettings();
  	showModal();
    return;
  }
	startTimer(duration);
  hideModal();
})

function showModal() {
	settingsElement.showModal();
}

function hideModal() {
	settingsElement.close();
}

function clearSettings() {
	durationInput.value = "";
}

function startTimer(minutes) {
	console.log("Starting timer with " + minutes + " minutes.");
  seconds = minutes * 60;
  initialTime = seconds;
  timerInterval = setInterval(() => {
  	if (seconds <= 0) {
    	timerRollover();
      seconds = initialTime;
    }
  	setTime(seconds);
    seconds --;
  }, 1000)
}

function setTime(seconds) {
	const timeString = new Date(1000 * seconds).toISOString().substr(11, 8);
  displayElement.immerHTML = timeString;
  titleElement.innerHTML = timeString;
}

function timerRollover() {

}

showModal();