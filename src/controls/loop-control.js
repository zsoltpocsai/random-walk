const controlButton = document.getElementById("loop-control-button");

controlButton.addEventListener("click", () => {
  toggleStatus();
  toggleLabel();
  for (const listener of controlListeners) {
    listener({ start: controlOnStart });
  }
});

let controlOnStart = false;
const controlListeners = [];

function toggleStatus() {
  controlOnStart = !controlOnStart;
}

function toggleLabel() {
  if (controlOnStart) {
    controlButton.innerText = "Stop";
  } else {
    controlButton.innerText = "Start";
  }
}

export function addListener(listener) {
  controlListeners.push(listener);
}
