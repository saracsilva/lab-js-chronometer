class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 10);

    if (printTimeCallback) setInterval(printTimeCallback, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 100 / 60);
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60);
  }

  // 3min32sec56cs
  // 18000 +   3256
  // 21256

  // 1 -> 01
  // 21 -> 021
  //(15001 / 100) % 60 - (Math.floor((15001 / 100) % 60)))*100
  getCentiseconds() {
    let number =
      (((this.currentTime / 100) % 60) - this.getSeconds()).toFixed(2) * 100;
    console.log(number);
    return Math.round(number);
    //return (((this.currentTime / 100) % 60) * 60 - this.getSeconds()) * 100;
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
    return (
      this.computeTwoDigitNumber(this.getMinutes()) +
      ":" +
      this.computeTwoDigitNumber(this.getSeconds()) +
      "." +
      this.computeTwoDigitNumber(this.getCentiseconds())
    );
  }
}
