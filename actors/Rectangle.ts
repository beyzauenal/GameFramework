
export class Rectangle{
    private x: number;
    private y: number;
    private width: number = 40;
    private height: number = 40;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
}
render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#66aaff";
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
update(deltaTime: number): void {
    this.x += 100 * deltaTime; // Move 100 pixels per second
 }
}