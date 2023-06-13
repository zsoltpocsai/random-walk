import { Position } from "./common.js";

const DIRECTION = {
  UP: 1,
  DOWN: 2,
  RIGHT: 3,
  LEFT: 4,
};

function stepFromPositionToDirection(pos, direction) {
  switch (direction) {
    case DIRECTION.UP:
      return new Position(pos.x, pos.y - 1);
    case DIRECTION.DOWN:
      return new Position(pos.x, pos.y + 1);
    case DIRECTION.RIGHT:
      return new Position(pos.x + 1, pos.y);
    case DIRECTION.LEFT:
      return new Position(pos.x -1, pos.y);
    default:
      return new Position(pos.x, pos.y);
  }
}

function getRandomDirection() {
  const rnd = Math.floor((Math.random() * 4) + 1);
  return rnd;
}

export { DIRECTION, stepFromPositionToDirection, getRandomDirection };