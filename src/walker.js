const walker = {
  posX: 0,
  posY: 0,
  moveToSkip: 5,
  skippedMove: 0,
  getNextStep() {
    if (this.skippedMove >= this.moveToSkip) {
      this.skippedMove = 0;
      return random_direction();
    } else {
      this.skippedMove += 1;
      return undefined;
    }
  },
  setSpeed(speed) {
    this.moveToSkip = Math.abs(speed - 10);
  },
  printPosition() {
    console.log(`(${this.posX}, ${this.posY})`);
  }
};

function random_direction() {
  const rnd = Math.floor((Math.random() * 4) + 1);
  return rnd;
}

export { walker };
