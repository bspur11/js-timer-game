var timerEl = document.getElementById('countdown');
var startButton = document.getElementById('start');

startButton.addEventListener('click', startGame)

// set interval to start quiz

function countdown() {
  var timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = window.setInterval(function () {
    // time left > 1
    if (timeLeft > 1) {
      // Set textContent of timerEl to show the remaining seconds
      timerEl.textContent = timeLeft + 'seconds remaining';
      // decrement 'timeLeft' by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // when timeLeft is wqual to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + 'second remaining';
      timeLeft--;
    } else {
      // once 'timeLeft' gets to 0, set 'timerEl' to an empth string
      timerEl.textContent = '';
      // use 'clearinterval()' to stop the timer
      clearInterval(timeInterval);
      // call the 'displayMessage()' function
      startGame();
    }
  }, 1000);
};

function startGame() {
  // hide start btn
  startButton.classList.add('hide');

}