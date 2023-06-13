import * as WalkerSpace from "./walker-space.js";
import * as Controls from "./controls.js";
import * as Walker from "./walker.js";
import * as Trail from "./trail.js";
import * as Canvas from "./canvas.js";

const walker = Walker.walker;

document.addEventListener("DOMContentLoaded", () => {
  walker.setSpeed(Controls.getSpeedControlValue());
  WalkerSpace.update();
});

Controls.setSpeedControlRange(Walker.MIN_SPEED, Walker.MAX_SPEED);

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

Walker.addWalkerMoveListener(() => {
  Trail.update(walker.pos);
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
  Canvas.clear();
  Trail.draw();
  WalkerSpace.update();
}
