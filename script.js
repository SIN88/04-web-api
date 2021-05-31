var timerEl = document.querySelector(".timer");
var mainEl = document.querySelector("#main");

var secondsLeft = 30;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContext = secondsLeft + "seconds left until GAME OVER";

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
       displayMessage ("GAME OVER");
       console.log("Game Over")
    }

  }, 1000);
}
