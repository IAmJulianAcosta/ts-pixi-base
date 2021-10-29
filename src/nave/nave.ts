import { Graphics, Ticker } from 'pixi.js';
import Hull from "./hull";
import Defenses from "./defenses";

export default class Nave extends Graphics {
  constructor(ticker: Ticker, x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    this.pivot.set(50, 50);
    this.addChild(new Hull(ticker, 50, 60));
    this.addChild(new Defenses(ticker, 12,50, 60, 3, 100));
    this.interactive = true;

    this.on('rightclick', () => {
      console.log('rclick');
    })
    this.on('click', () => {
      console.log('click');
    })

    ticker.add(() => {
      this.draw();
    });
  }

  public draw(): void {
  }
}
