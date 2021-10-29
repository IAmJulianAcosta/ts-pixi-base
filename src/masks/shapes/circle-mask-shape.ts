import {Graphics, Ticker} from 'pixi.js';

export default class CircleMaskShape extends Graphics {
  protected radius: number;
  protected direction: boolean = true;

  constructor(ticker: Ticker, radius: number, x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    this.radius = radius;

    ticker.add(() => {
      this.update();
      this.draw();
    });
  }

  public draw(): void {
    this.clear();
    this.beginFill(0x000000);
    this.drawCircle(this.x, this.y, this.radius);
    this.endFill();
  }

  public update(): void {
    if (this.direction) {
      this.radius += 1;
    } else {
      this.radius -= 1;
    }
    if (this.radius > 300) {
      this.direction = false;
    } else if (this.radius < 100) {
      this.direction = true;
    }
  }
}
