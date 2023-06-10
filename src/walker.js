import { getRandomDirection } from "./direction.js";
import { Position } from "./common.js";

const walker = {
  pos: new Position(0, 0),
  moveToSkip: 5,
  skippedMove: 0,
  getNextStep() {
    if (this.skippedMove >= this.moveToSkip) {
      this.skippedMove = 0;
      return getRandomDirection();
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

export { walker };
