import { Actor } from "./actor.js";

export class Tree implements Actor {
  constructor(private x: number, private y: number, private size: number = 60) {}

  update(deltaTime: number) {}

  render(ctx: CanvasRenderingContext2D) {
    const trunkWidth = this.size * 0.18;
    const trunkHeight = this.size * 0.35;
    const trunkX = this.x - trunkWidth / 2;
    const trunkY = this.y;

    const crownHeight = this.size * 0.85;
    const crownWidth = this.size;
    const crownTopY = this.y - trunkHeight - crownHeight;

    ctx.fillStyle = "#8B4513";
    ctx.fillRect(trunkX, trunkY, trunkWidth, trunkHeight);

    ctx.fillStyle = "#228B22";
    for (let layer = 0; layer < 3; layer++) {
      const topY = crownTopY + layer * (crownHeight * 0.2);
      const bottomY = crownTopY + crownHeight * 0.4 + layer * (crownHeight * 0.2);
      const halfWidth = crownWidth * (1 - layer * 0.18) / 2;

      ctx.beginPath();
      ctx.moveTo(this.x, topY);
      ctx.lineTo(this.x - halfWidth, bottomY);
      ctx.lineTo(this.x + halfWidth, bottomY);
      ctx.closePath();
      ctx.fill();
    }
  }
}
