class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    const intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);

    if (printTimeCallback) setInterval(printTimeCallback, 1000);
  }

  getMinutes() {
    return Math.round(this.currentTime / 60);
  }

  getSeconds() {
    return Math.round(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
