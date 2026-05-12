export class Rectangle {
    constructor(x, y) {
        this.width = 40;
        this.height = 40;
        this.x = x;
        this.y = y;
    }
    render(ctx) {
        ctx.fillStyle = "#66aaff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update(deltaTime) {
        this.x += 100 * deltaTime; // Move 100 pixels per second
    }
}
