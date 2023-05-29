import * as WalkerSpace from "./walker-space.js";
import { walker } from "./walker.js";
import * as Controls from "./controls.js";

document.addEventListener("DOMContentLoaded", () => {
  walker.setSpeed(Controls.getSpeedControlValue());
  WalkerSpace.draw();
});

Controls.addLoopControlListener((event) => {
  if (event.start) {
    mainLoop.start();
  } else {
    mainLoop.stop();
  }
});

Controls.addSpeedControlListener((event) => {
  walker.setSpeed(event.speed);
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
    mainLoop.frameCount = 0;
    window.requestAnimationFrame(run);
  }
}

function update() {
  walker.walk();
  WalkerSpace.draw();
}