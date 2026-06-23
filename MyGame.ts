// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
 import { Actor } from "./actors/actor.js";
import { Tree } from "./actors/Tree.js";
import { RightMovement } from "./movements/RightMovement.js";

// start using objects
class MyGame extends Game {
  private actors: Actor[] = [];




  init(): void {
    const r1 = new Rectangle(new RightMovement(20, 20), 60, 60);
    const r2 = new Rectangle(new RightMovement(100, 100), 20, 20);
    const r3 = new Rectangle(new RightMovement(200, 150), 100, 100);

    this.actors.push(
      new Circle(new RightMovement(100, 200), 10),
      new Circle(new RightMovement(100, 100), 100),
      new Circle(new RightMovement(100, 100), 30)
    );

    this.actors.push(r1, r2, r3);

    this.actors.push(new Tree(50, 250));
    this.actors.push(new Tree(100, 450));
  }

  update(deltaTime: number): void {
    this.actors.forEach(a => a.update(deltaTime));
  }

  render(ctx: CanvasRenderingContext2D): void {
    this.actors.forEach(a => a.render(ctx));
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();

