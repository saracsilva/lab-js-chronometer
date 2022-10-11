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
    let newValue = value.toString();
    let string = "";
    //if (value.length < 2) () => (newValue = `0${value.toString(2)}`);

    if (newValue.length < 2) {
      string = `0${newValue}`;
    } else if (newValue.length === 2) {
      string = newValue;
    }
    console.log(string);
    return string;
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
