const controlInput = document.getElementById("speed-control-input");
const controlLabel = document.getElementById("speed-control-label");

controlInput.value = 3;
printSpeed(controlInput.value);

controlInput.addEventListener("input", (event) => {
  printSpeed(event.target.value);
  for (const listener of speedControlListeners) {
    listener({ speed: controlInput.value });
  }
});

function printSpeed(value) {
  controlLabel.innerText = `Speed: ${value}`;
}

const speedControlListeners = [];

export function setRange(min, max) {
  controlInput.min = min;
  controlInput.max = max;
}

export function getValue() {
  return controlInput.value;
}

export function addListener(listener) {
  speedControlListeners.push(listener);
}
