export interface MoveStrategy {
  getX(): number;
  getY(): number;
  update(deltaTime: number): void;
}
