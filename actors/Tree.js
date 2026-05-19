export class Tree {
    constructor(x, y, size = 60) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
    update(deltaTime) {
        // Trees are static by default.
    }
    render(ctx) {
        const trunkWidth = this.size * 0.18;
        const trunkHeight = this.size * 0.35;
        const trunkX = this.x - trunkWidth / 2;
        const trunkY = this.y;
        const crownHeight = this.size * 0.85;
        const crownWidth = this.size * 1.0;
        const crownTopY = this.y - trunkHeight - crownHeight;
        // Draw trunk
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(trunkX, trunkY, trunkWidth, trunkHeight);
        // Draw tree crown in three overlapping green layers
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
