const controlInput = document.getElementById("size-control-input");
const controlLabel = document.getElementById("size-control-label");
const controlButton = document.getElementById("size-control-button");

const listeners = [];
updateLabel();

controlInput.addEventListener("input", () => {
  updateLabel();
});

controlButton.addEventListener("click", () => {
  for (const listener of listeners) {
    listener({ size: controlInput.value });
  }
});

function updateLabel() {
  const size = controlInput.value;
  controlLabel.innerText = `Area size: ${size} x ${size}`;
}

export function addListener(listener) {
  listeners.push(listener);
}