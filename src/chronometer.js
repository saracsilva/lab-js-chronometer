class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);

    if (printTimeCallback) setInterval(printTimeCallback, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.round(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    let newValue = value.toString();
    let string = "";

    if (newValue.length < 2) {
      string = `0${newValue}`;
    } else if (newValue.length === 2) {
      string = newValue;
    }
    console.log(string);
    return string;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    /*let minutes = this.computeTwoDigitNumber(this.getMinutes);
    let seconds = this.computeTwoDigitNumber(this.getSeconds);
    return `${minutes}:${seconds}`;*/
    return (
      this.computeTwoDigitNumber(this.getMinutes()) +
      ":" +
      this.computeTwoDigitNumber(this.getSeconds())
    );
  }
}
