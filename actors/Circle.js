import { RightMovement } from "../movements/RightMovement.js";
export class Circle {
    constructor(x, y, radius) {
        this.radius = 40;
        this.movement = new RightMovement(x, y, 100);
        if (radius !== undefined) {
            this.radius = radius;
        }
    }
    render(ctx) {
        ctx.fillStyle = "#66aaff";
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), // ← HIER: anpassen falls dein Movement anders heißt
        this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    update(deltaTime) {
        this.movement.update(deltaTime, 10);
    }
}
