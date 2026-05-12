export class Circle {
    constructor(x, y, radius) {
        this.radius = 40;
        this.x = x;
        this.y = y;
        if (radius !== undefined) {
            this.radius = radius;
        }
    }
    render(ctx) {
        console.log("in circle");
        ctx.fillStyle = "#66aaff";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    update(deltaTime) {
        this.y += 100 * deltaTime; // Move 100 pixels per second
    }
}
