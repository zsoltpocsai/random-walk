import * as WalkerSpace from "./walker-space.js";
import { LoopControl, SpeedControl, ResetControl, SizeControl } from "./controls.js";
import * as Walker from "./walker.js";
import * as Trail from "./trail.js";
import * as Canvas from "./canvas.js";

const walker = Walker.walker;

document.addEventListener("DOMContentLoaded", () => {
  walker.setSpeed(SpeedControl.getValue());
  WalkerSpace.updateAndDraw();
});

// -- Set up controls

SpeedControl.setValue(Walker.INITIAL_SPEED);
SpeedControl.setRange(Walker.MIN_SPEED, Walker.MAX_SPEED);

// ----

// -- Set control listeners

LoopControl.addListener((event) => {
  if (event.start) {
    mainLoop.start();
  } else {
    mainLoop.stop();
  }
});

SpeedControl.addListener( () => walker.setSpeed(SpeedControl.getValue()) );

ResetControl.addListener(() => {
  Trail.deleteAll();
  Canvas.clear();
  WalkerSpace.reset();
  WalkerSpace.draw();
});

SizeControl.addListener((event) => {
  if (WalkerSpace.isCurrentSizeDifferent(event.size, event.size)) {
    WalkerSpace.setSizeInPixels(event.size, event.size);
    Trail.deleteAll();
    WalkerSpace.draw();
  }
});

// ----

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
  WalkerSpace.updateAndDraw();
}
