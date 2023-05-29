const walker = {
  posX: 0,
  posY: 0,
  size: 2,
  walk() {
    const move = random_move();
    switch (move) {
      case MOVE.UP:
        this.posY -= 1;
        break;
      case MOVE.DOWN:
        this.posY += 1;
        break;
      case MOVE.RIGHT:
        this.posX += 1;
        break;
      case MOVE.LEFT:
        this.posX -= 1;
        break;
    }
  },
  printPosition() {
    console.log(`(${this.posX}, ${this.posY})`);
  }
};

const MOVE = {
  UP: 1,
  DOWN: 2,
  RIGHT: 3,
  LEFT: 4,
};

function random_move() {
  const rnd = Math.floor((Math.random() * 4) + 1);
  return rnd;
}

export { walker };
