import { getRandomDirection } from "./direction.js";
import { Position } from "./common.js";

const walker = {
  pos: new Position(0, 0),
  nextDirection() {
    return walkerMove.next();
  },
  setSpeed(speed) {
    walkerMove.setSpeed(speed);
  },
  setPosition(pos) {
    this.pos.x = pos.x;
    this.pos.y = pos.y;
  },
  printPosition() {
    console.log(`(${this.posX}, ${this.posY})`);
  }
};

const MAX_SPEED = 10;
const MIN_SPEED = 1;

const walkerMove = {
  moveToSkip: MAX_SPEED / 2,
  skippedMove: 0,
  setSpeed(speed) {
    this.moveToSkip = Math.abs(speed - MAX_SPEED);
  },
  next() {
    if (this.skippedMove >= this.moveToSkip) {
      this.skippedMove = 0;
      return getRandomDirection();
    } else {
      this.skippedMove += 1;
      return undefined;
    }
  }
}

export { walker, MAX_SPEED, MIN_SPEED };
