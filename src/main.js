import * as WalkerSpace from "./walker-space.js";
import * as Controls from "./controls.js";
import { walker, MAX_SPEED, MIN_SPEED } from "./walker.js";

document.addEventListener("DOMContentLoaded", () => {
  walker.setSpeed(Controls.getSpeedControlValue());
  WalkerSpace.update();
});

Controls.setSpeedControlRange(MIN_SPEED, MAX_SPEED);

Controls.addLoopControlListener((event) => {
  if (event.start) {
    mainLoop.start();
  } else {
    mainLoop.stop();
  }
});

Controls.addSpeedControlListener((event) => {
  walker.setSpeed(Controls.getSpeedControlValue());
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

function run() {
  update();
  if (mainLoop.started) {
    window.requestAnimationFrame(run);
  }
}

function update() {
  WalkerSpace.update();
}