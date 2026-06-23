import { Actor } from "./actor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";

export class Circle implements Actor {
    private radius: number = 40;

    constructor(private movement: MoveStrategy, radius?: number) {
        if (radius !== undefined) {
            this.radius = radius;
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#66aaff";
        ctx.beginPath();
        ctx.arc(
            this.movement.getX(),
            this.movement.getY(),
            this.radius,
            0,
            Math.PI * 2
        );
        ctx.fill();
    }

    update(deltaTime: number): void {
        this.movement.update(deltaTime);
    }
}
