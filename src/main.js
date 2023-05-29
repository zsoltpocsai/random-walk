import * as WalkerSpace from "./walker-space.js";
import * as Controls from "./controls.js";

document.addEventListener("DOMContentLoaded", () => {
  WalkerSpace.setSpeed(Controls.getSpeedControlValue());
  WalkerSpace.update();
});

Controls.addLoopControlListener((event) => {
  if (event.start) {
    mainLoop.start();
  } else {
    mainLoop.stop();
  }
});

Controls.addSpeedControlListener((event) => {
  WalkerSpace.setSpeed(event.speed);
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
  WalkerSpace.update();
}