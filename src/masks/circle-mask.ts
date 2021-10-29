import {Container, Ticker} from 'pixi.js';
import CircleMaskShape from "./shapes/circle-mask-shape";

export default class CircleMask extends Container {
  constructor(ticker: Ticker, radius: number, mascaraX: number, mascaraY: number) {
    super();
    this.x = 0;
    this.y = 0;

    this.mask = new CircleMaskShape(ticker, radius, mascaraX, mascaraY);
  }
}
