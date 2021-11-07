class Timer {
  constructor() {
    this.time = 0;
  }

  /**
   * This function will set the timer based off of difficulty setting
   * @param {number} difficulty
   */
  setTime(difficulty) {
    // difficulty settings 1-3
    // setting time as in secounds
    if (difficulty === 1) {
      this.time = 20;
    } else if (difficulty === 2) {
      this.time = 30;
    } else {
      this.time = 45;
    }
  }

  drawTimer() {
    let timerLocation = document.querySelector('.workout-timer h3');
    timerLocation.textContent = this.time + ' s';
  }

  // tick needs another function call in app in order to run correctly
  // and update the time

  /**
   * this function will tick the timer down to zero
   */
  tick() {
    if (this.time > 0) {
      this.time--;
      this.drawTimer();
      return false;
    } else {
      console.log('time is done');
      return true;
    }
  }
}
