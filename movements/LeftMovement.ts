import { MoveStrategy } from "./MoveStrategy.js";
export class LeftMovement implements MoveStrategy {
    getY(): number {
        throw new Error("Method not implemented.");
    }
    constructor(private x: number, private y: number, private speed: number) {}
    update(deltaTime: number): void {
        this.x -= this.speed * deltaTime;
        if (this.x < 0) {
            this.x = 800;
        }
    }
    getX(): number {
        return this.x;
     }
     
}