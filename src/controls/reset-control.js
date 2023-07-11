const controlButton = document.getElementById("reset-control-button");

const listeners = [];

controlButton.addEventListener("click", () => {
  for (const listener of listeners) {
    listener();
  }
});

export function addListener(listener) {
  listeners.push(listener);
}
