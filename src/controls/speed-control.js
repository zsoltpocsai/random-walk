const controlInput = document.getElementById("speed-control-input");
const controlLabel = document.getElementById("speed-control-label");

updateLabel();

controlInput.addEventListener("input", () => {
  updateLabel();
  for (const listener of listeners) {
    listener({ speed: controlInput.value });
  }
});

function updateLabel() {
  controlLabel.innerText = `Speed: ${controlInput.value}`;
}

const listeners = [];

export function setRange(min, max) {
  controlInput.min = min;
  controlInput.max = max;
}

export function getValue() {
  return controlInput.value;
}

export function setValue(speed) {
  controlInput.value = speed;
  updateLabel();
}

export function addListener(listener) {
  listeners.push(listener);
}
