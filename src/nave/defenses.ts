import {Graphics, Ticker} from 'pixi.js';

export default class Defenses extends Graphics {
  protected amount: number;
  protected size: number;
  protected distance: number;
  protected speed: number;

  constructor(
    ticker: Ticker,
    amount: number,
    x: number,
    y: number,
    speed: number,
    distance: number = 90,
    size: number = 5
  ) {
    super();

    this.amount = amount;
    this.size = size;
    this.x = x;
    this.y = y;
    this.distance = distance;
    this.speed = speed;

    ticker.add(() => {
      this.draw();
      this.update();
    });
  }

  public draw(): void {
    this.clear();
    this.beginFill(0x0080E0);
    for (
      let i: number = 0, angle: number = 0;
      i < this.amount;
      i++, angle += (Math.PI * 2) / this.amount
    ) {
      this.drawCircle(
        Math.cos(angle) * this.distance,
        Math.sin(angle) * this.distance,
        this.size
      );
    }
    this.endFill();
  }

  public update(): void {
    this.angle += this.speed;
  }
}

