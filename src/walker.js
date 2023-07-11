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

export const INITIAL_SPEED = 6;
export const MAX_SPEED = 10;
export const MIN_SPEED = 1;

const walkerMove = {
  moveToSkip: MAX_SPEED / 2,
  skippedMove: 0,
  setSpeed(speed) {
    this.moveToSkip = Math.abs(speed - MAX_SPEED);
  },
  next() {
    if (this.skippedMove >= this.moveToSkip) {
      this.skippedMove = 0;
      const direction = getRandomDirection();
      if (walkerMoveListener) {
        walkerMoveListener();
      }
      return direction;
    } else {
      this.skippedMove += 1;
      return undefined;
    }
  }
}

let walkerMoveListener = undefined;

function addWalkerMoveListener(listener) {
  walkerMoveListener = listener;
}

export { walker, addWalkerMoveListener };
