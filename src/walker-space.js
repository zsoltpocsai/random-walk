import { WALKER_SIZE } from "./walker.js";

const CANVAS_HEIGHT = 600;
const CANVAS_WIDTH = 600;

let canvas = null;
let ctx = null;

function init() {
  canvas = document.getElementById("canvas");
  canvas.height = CANVAS_HEIGHT;
  canvas.width = CANVAS_WIDTH;
  ctx = canvas.getContext("2d");
}

function clear() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw(walker) {
  ctx.fillStyle = "black";
  ctx.fillRect(walker.posX, walker.posY, WALKER_SIZE, WALKER_SIZE);
}

export { init, draw, clear };
