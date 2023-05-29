import { walker } from "./walker.js";

function test_walk() {
  console.log("Walk test:")
  for (let i = 0; i < 20; i++) {
    walker.walk();
    walker.printPosition();
  }
}

export function execute_tests() {
  test_walk();
}
