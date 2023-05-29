import * as Canvas from "./canvas.js";
import { walker } from "./walker.js";

const SPACE_WIDTH = 60;
const SPACE_HEIGHT = 60;
const SCALE_FACTOR = 10;

Canvas.setSize(SPACE_WIDTH * SCALE_FACTOR, SPACE_HEIGHT * SCALE_FACTOR);

const space = createSpace(SPACE_WIDTH, SPACE_HEIGHT);

addWalker(space, walker);

function createSpace(width, height) {
  const space = [];
  for (let i = 0; i < height; i++) {
    let row = []
    for (let j = 0; j < width; j++) {
      let content = 0;
      row.push(content);
    }
    space.push(row);
  }
  return space;
}

function addWalker(space, walker) {
  const posY = SPACE_HEIGHT / 2;
  const posX = SPACE_WIDTH / 2;
  walker.posY = posY;
  walker.posX = posX;
  space[posY][posX] = walker;
}

export function draw() {
  for (let row = 0; row < SPACE_HEIGHT; row++) {
    for (let col = 0; col < SPACE_WIDTH; col++) {
      let element = space[row][col];
      if (typeof element === "object") {
        if (element === walker) {
          Canvas.clear();
          Canvas.drawSquare(
            walker.posX * SCALE_FACTOR, 
            walker.posY * SCALE_FACTOR, 
            SCALE_FACTOR
          );
        }
      }
    }
  }
}