import { MoveStrategy } from "./MoveStrategy.js";
export class RightMovement implements MoveStrategy {
    constructor(private x: number, private y: number, private speed: number = 100) {}

    getY(): number {
        return this.y;
    }

    update(deltaTime: number): void {
        this.x += this.speed * deltaTime; 
        if (this.x > 800) {
            this.x = 0;
        }
    }

    getX(): number {
        return this.x;
    }
}
