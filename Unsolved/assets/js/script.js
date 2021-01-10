var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

var message =
  'Congratulations! Now you are prepared to tackle the Challenge this week! Good luck!';
var words = message.split(' ');

// Timer that counts down from 5
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
      displayMessage();
    }
  }, 1000);
};


// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
  var msgInterval = setInterval(function () {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}

startBtn.onclick = countdown;