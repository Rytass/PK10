export default class NumberCandidate {
  constructor(num) {
    this.num = num;
    this.failedCount = 0;
    this.killFailedCount = 0;
  }

  resetFailed() {
    this.failedCount = 0;
  }

  failed() {
    this.failedCount += 1;
  }

  killFailed() {
    this.killFailedCount += 1;
  }

  isPass(limit = 0) {
    return this.failedCount === limit;
  }

  toString() {
    return this.num;
  }

  getSerialNumber() {
    this.serialNum = Array.from(this.num).sort((a, b) => parseInt(a, 10) > parseInt(b, 10)).join('');

    return this.serialNum;
  }

  set serial(serialNum) {
    this.serialNum = serialNum;
  }

  get serial() {
    return this.serialNum || this.getSerialNumber();
  }
}
