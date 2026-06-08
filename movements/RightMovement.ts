import { MoveStrategy } from "./MoveStrategy.js";
export class RightMovement implements MoveStrategy {
    constructor(private x: number, private y: number, private speed: number = 100) {}

    getY(): number {
        throw new Error("Method not implemented.");
    }

    update(deltaTime: number): void {
        this.x += this.speed * deltaTime; // Move the actor to the right
    }

    getX(): number {
        return this.x;
    }
}
