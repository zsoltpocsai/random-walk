import * as Canvas from "./canvas.js";
import * as WalkerSpace from "./walker-space.js";
import { Position } from "./common.js";
import { getColorForVisit } from "./colors.js";

function Trail(pos) {
  this.pos = new Position(pos.x, pos.y);
  this.visitNumber = 0;
}

Trail.prototype.increaseVisit = function() {
  this.visitNumber += 1;
}

const trails = [];
const xMap = new Map();

export function update(position) {
  const trail = getTrailInPosition(position);
  if (trail) {
    trail.increaseVisit();
  } else {
    throw 'Trail should exist!';
  }
}

export function draw() {
  for (const trail of trails) {
    Canvas.drawSquare(
      trail.pos.x * WalkerSpace.SCALE_FACTOR,
      trail.pos.y * WalkerSpace.SCALE_FACTOR,
      WalkerSpace.SCALE_FACTOR,
      getColorForVisit(trail.visitNumber)
    );
  }
}

export function deleteAll() {
  trails.splice(0);
  xMap.clear();
}

function getTrailInPosition(position) {
  let yMap = xMap.get(position.x);
  if (yMap) {
    let trail = yMap.get(position.y);
    if (!trail) {
      trail = new Trail(position);
      trails.push(trail);
      yMap.set(position.y, trail);
    }
    return trail;
  } else {
    const trail = new Trail(position);
    trails.push(trail);
    yMap = new Map();
    yMap.set(position.y, trail);
    xMap.set(position.x, yMap);
    return trail;
  }
}
