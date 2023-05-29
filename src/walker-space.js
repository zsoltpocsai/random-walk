import * as Canvas from "./canvas.js";
import { walker } from "./walker.js";
import * as Direction from "./direction.js";

const SPACE_WIDTH = 30;
const SPACE_HEIGHT = 30;
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
  walker.posY = y;
  walker.posX = x;
  space[y][x].push(walker);
}

function removeWalker(x, y) {
  const elements = space[y][x];
  const idx = elements.indexOf(walker);
  if (idx >= 0) {
    elements.splice(elements.indexOf(walker), 1);
  }
}

function moveWalker(direction) {
  const newPosition = Direction.stepToDirection(walker.posX, walker.posY, direction);
  const x = newPosition[0];
  const y = newPosition[1];
  if ((x >= 0 && x <= SPACE_WIDTH) &&
      (y >= 0 && y <= SPACE_HEIGHT)) {
    
    removeWalker(walker.posX, walker.posY);
    addWalker(x, y);
  }
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