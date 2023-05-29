const DIRECTION = {
  UP: 1,
  DOWN: 2,
  RIGHT: 3,
  LEFT: 4,
};

function stepToDirection(x, y, direction) {
  switch (direction) {
    case DIRECTION.UP:
      return [x, y - 1];
    case DIRECTION.DOWN:
      return [x, y + 1];
    case DIRECTION.RIGHT:
      return [x + 1, y];
    case DIRECTION.LEFT:
      return [x - 1, y];
    default:
      return [x, y];
  }
}

export { DIRECTION, stepToDirection };