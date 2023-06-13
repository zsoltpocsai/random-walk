// Speed Control

const speedControlInput = document.getElementById("speed-control-input");
const speedControlLabel = document.getElementById("speed-control-label");

speedControlInput.value = 3;
printSpeed(speedControlInput.value);

speedControlInput.addEventListener("input", (event) => {
  printSpeed(event.target.value);
  for (const listener of speedControlListeners) {
    listener({ speed: speedControlInput.value });
  }
});

function printSpeed(value) {
  speedControlLabel.innerText = `Speed: ${value}`;
}

const speedControlListeners = [];

export function setSpeedControlRange(min, max) {
  speedControlInput.min = min;
  speedControlInput.max = max;
}

export function getSpeedControlValue() {
  return speedControlInput.value;
}

export function addSpeedControlListener(listener) {
  speedControlListeners.push(listener);
}

// Loop Control

const loopControlButton = document.getElementById("loop-control-button");

loopControlButton.addEventListener("click", () => {
  toggleStatus();
  toggleLabel();
  for (const listener of loopControlListeners) {
    listener({ start: loopControlOnStart });
  }
});

let loopControlOnStart = false;
const loopControlListeners = [];

function toggleStatus() {
  loopControlOnStart = !loopControlOnStart;
}

function toggleLabel() {
  if (loopControlOnStart) {
    loopControlButton.innerText = "Stop";
  } else {
    loopControlButton.innerText = "Start";
  }
}

export function addLoopControlListener(listener) {
  loopControlListeners.push(listener);
}
