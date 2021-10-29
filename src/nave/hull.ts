import {Graphics, Ticker, Point} from 'pixi.js';

export default class Hull extends Graphics {
  protected rotate: boolean = false;

  constructor(ticker: Ticker, x: number, y: number) {
    super();

    this.interactive = true;
    this.buttonMode = true;
    this.on('mouseover', this.start);
    this.on('mouseout', this.stop);
    this.x = x;
    this.y = y;
    this.pivot.set(x, y);

    ticker.add(() => {
      this.draw();
      this.update();
    });
  }

  public draw(): void {
    this.clear();
    this.drawHull();
    this.drawHole();
  }

  protected drawHole(): void {
    this.beginHole();
    this.drawCircle(this.x, this.y, 10);
    this.endHole();
  }

  protected drawHull() {
    this.beginFill(0x0000F0);
    this.lineStyle(3, 0xFFFFFF);
    this.drawPolygon([
      new Point(50, 0),
      new Point(0, 100),
      new Point(50, 80),
      new Point(100, 100),
    ]);
    this.endFill();
  }

  public start() {
    this.rotate = true;
  }

  public stop() {
    this.rotate = false;
  }

  public update(): void {
    if (this.rotate) {
      this.angle += 1;
    }
  }
}
