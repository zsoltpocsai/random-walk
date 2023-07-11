import * as Canvas from "./canvas.js";
import { walker } from "./walker.js";
import * as Direction from "./direction.js";
import { Position } from "./common.js";

// Width and height must be even numbers
let SPACE_WIDTH = 60;
let SPACE_HEIGHT = 60;

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

function redefineInitWalkerPosition() {
  initWalkerPosition.x = SPACE_HEIGHT / 2;
  initWalkerPosition.y = SPACE_WIDTH / 2;
}

export function setSizeInPixels(width, height) {
  if (width % SCALE_FACTOR > 0 ||
      height % SCALE_FACTOR > 0) {
        throw "Inproper width or height pixel size";
  }

  SPACE_WIDTH = width / SCALE_FACTOR;
  SPACE_HEIGHT = height / SCALE_FACTOR;
  Canvas.setSize(width, height);

  redefineInitWalkerPosition();
  reset();
}

export function draw() {
  Canvas.drawSquare(
    walker.pos.x * SCALE_FACTOR, 
    walker.pos.y * SCALE_FACTOR, 
    SCALE_FACTOR
  );
}

export function update() {
  const direction = walker.nextDirection();
  if (direction) {
    moveWalker(direction);
  }
}

export function updateAndDraw() {
  update();
  draw();
}

export function reset() {
  walker.setPosition(initWalkerPosition);
}

export { SCALE_FACTOR };