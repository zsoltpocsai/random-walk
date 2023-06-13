const canvas = document.getElementById("canvas"); 
const ctx = canvas.getContext("2d");

function setSize(width, height) {
  canvas.width = width;
  canvas.height = height;
}

function clear() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSquare(x, y, size, color = "black") {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
}

export { setSize, clear, drawSquare };