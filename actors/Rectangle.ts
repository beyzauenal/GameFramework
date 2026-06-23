import { MoveStrategy } from "../movements/MoveStrategy.js";
import { Actor } from "./actor.js";

export class Rectangle implements Actor {
  private movement: MoveStrategy;
  private width: number;
  private height: number;

  constructor(movement: MoveStrategy, width: number, height: number) {
    this.movement = movement;
    this.width = width;
    this.height = height;
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#FF66aa";
    ctx.fillRect(
      this.movement.getX(),
      this.movement.getY(),
      this.width,
      this.height
    );
  }

  update(deltaTime: number): void {
    this.movement.update(deltaTime);
  }
}
