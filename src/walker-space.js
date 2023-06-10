import * as Canvas from "./canvas.js";
import { walker } from "./walker.js";
import * as Direction from "./direction.js";

const SPACE_WIDTH = 16;
const SPACE_HEIGHT = 16;
const SCALE_FACTOR = 10;

Canvas.setSize(SPACE_WIDTH * SCALE_FACTOR, SPACE_HEIGHT * SCALE_FACTOR);

const space = createSpace(SPACE_WIDTH, SPACE_HEIGHT);

addWalker(
  SPACE_HEIGHT / 2, 
  SPACE_WIDTH / 2
);

function createSpace(width, height) {
  const space = [];
  for (let i = 0; i < height; i++) {
    let row = []
    for (let j = 0; j < width; j++) {
      let content = [];
      row.push(content);
    }
    space.push(row);
  }
  return space;
}

function addWalker(x, y) {
  walker.pos.y = y;
  walker.pos.x = x;
  space[y][x].push(walker);
}

function removeWalker(x, y) {
  const elements = space[y][x];
  const idx = elements.indexOf(walker);
  if (idx >= 0) {
    elements.splice(idx, 1);
  }
}

function moveWalker(direction) {
  const newPosition = Direction.stepFromPositionToDirection(walker.pos, direction);
  if (isInsideOfSpaceBoundary(newPosition)) {
    removeWalker(walker.pos.x, walker.pos.y);
    addWalker(newPosition.x, newPosition.y);
  }
}

function isInsideOfSpaceBoundary(position) {
  const x = position.x;
  const y = position.y;
  return ((x >= 0 && x <= SPACE_WIDTH) &&
          (y >= 0 && y <= SPACE_HEIGHT));
}

function draw() {
  Canvas.clear();
  for (let row = 0; row < SPACE_HEIGHT; row++) {
    for (let col = 0; col < SPACE_WIDTH; col++) {
      const elements = space[row][col];
      if (elements.length > 0) {
        drawSpaceElements(col, row, elements);
      }
    }
  }
}

function drawSpaceElements(x, y, elements) {
  const walkerFound = elements.find(e => e === walker);
  if (walkerFound) {
    Canvas.drawSquare(x * SCALE_FACTOR, y * SCALE_FACTOR, SCALE_FACTOR);
  }
}

function update() {
  const step = walker.getNextStep();
  if (step) {
    moveWalker(step);
  }
  draw();
}

function setSpeed(speed) {
  walker.setSpeed(speed);
}

export { update, setSpeed };