class Chronometer {

  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    const minutes = this.currentTime / 60;
    const wholeNumber = Math.floor(minutes);
    return wholeNumber;
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    const stringValue = String(value);
    return value < 10 ? '0' + stringValue : stringValue;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();

    const stringMinutes = this.computeTwoDigitNumber(minutes);
    const stringSeconds = this.computeTwoDigitNumber(seconds);

    const formattedTime = stringMinutes + ':' + stringSeconds;

    return formattedTime;
    }
}
