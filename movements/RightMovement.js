export class RightMovement {
  constructor(x, y, speed) {
    this.x = x;
    this.speed = speed;
  }
  update(deltaTime, x) {
    return x + 200 * deltaTime; // Move 100 pixels per second to the right
  }
  getX() {
    return this.x;
  }
}
