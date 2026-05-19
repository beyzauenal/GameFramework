// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Tree } from "./actors/Tree.js";
// start using objects
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.actors = [];
    }
    init() {
        console.log("Game started!");
        // Rectangle(x, y, width, height)
        const r1 = new Rectangle(20, 20);
        const r2 = new Rectangle(100, 100);
        // Circle(x, y, radius)
        this.actors.push(new Circle(200, 200, 30), new Circle(300, 300, 50), new Circle(400, 400, 20));
        // Trees
        this.actors.push(r1, r2, new Tree(500, 500, 80), new Tree(100, 60, 40));
    }
    update(deltaTime) {
        this.actors.forEach(a => a.update(deltaTime));
    }
    render(ctx) {
        this.actors.forEach(a => a.render(ctx));
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
