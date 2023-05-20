const WALKER_SIZE = 2;
const WALKER_COLOR = "black";

const walker = {
  posX: 0,
  posY: 0,
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

function test_random() {
  const stat = [0, 0, 0, 0];
  for (let i = 0; i < 200; i++) {
    const move = random_move();
    stat[move - 1] += 1;
  }
  console.log(`Random test: ${stat}`);
}

function test_walk() {
  console.log("Walk test:")
  for (let i = 0; i < 20; i++) {
    walker.walk();
    walker.printPosition();
  }
}

export function execute_tests() {
  test_random();
  test_walk();
}

export { walker, WALKER_SIZE };
