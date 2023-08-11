const counter = document.getElementById("iteration-counter");

let count = 0;

function print() {
  counter.innerText = "Iteration: " + count;
}

export function update() {
  count += 1;
  print();
}

export function reset() {
  count = 0;
  print();
}