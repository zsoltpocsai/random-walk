import * as Canvas from "./canvas.js";
import { walker } from "./walker.js";
import * as Direction from "./direction.js";
import { Position } from "./common.js";

// Width and height must be even numbers
const SPACE_WIDTH = 30;
const SPACE_HEIGHT = 30;

// Scale factor indicates the size of one space 'tile' in pixels
const SCALE_FACTOR = 10;

const initWalkerPosition = new Position(
  SPACE_HEIGHT / 2, SPACE_WIDTH / 2
);

Canvas.setSize(SPACE_WIDTH * SCALE_FACTOR, SPACE_HEIGHT * SCALE_FACTOR);

walker.setPosition(initWalkerPosition);

function moveWalker(direction) {
  const newPosition = Direction.stepFromPositionToDirection(walker.pos, direction);
  if (isPositionInsideOfSpaceBoundary(newPosition)) {
    walker.setPosition(newPosition);
  }
}

function isPositionInsideOfSpaceBoundary(position) {
  const x = position.x;
  const y = position.y;
  return ((x >= 0 && x <= SPACE_WIDTH) &&
          (y >= 0 && y <= SPACE_HEIGHT));
}

function draw() {
  
  // drawing walker
  Canvas.drawSquare(
    walker.pos.x * SCALE_FACTOR, 
    walker.pos.y * SCALE_FACTOR, 
    SCALE_FACTOR
  );
}

function update() {
  const direction = walker.nextDirection();
  if (direction) {
    moveWalker(direction);
  }
  draw();
}

export { update, SCALE_FACTOR };