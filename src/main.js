import * as WalkerSpace from "./walker-space.js";
import { walker } from "./walker.js";

document.addEventListener("DOMContentLoaded", () => {
  mainLoop.start();
  setInterval(() => mainLoop.stop(), 5000);
});

const mainLoop = {
  started: false,
  start() {
    this.started = true;
    window.requestAnimationFrame(run);
  },
  stop() {
    this.started = false;
  }
}

function run(time) {
  update();
  if (mainLoop.started) {
    window.requestAnimationFrame(run);
  }
}

function update() {
  walker.walk();
  WalkerSpace.draw();
}