import { Graphics, Ticker, utils } from 'pixi.js';

export default class Rectangulo extends Graphics {
  protected rectWidth: number;
  protected rectHeight: number;
  protected parado: boolean = false;
  protected color: number;

  constructor(ticker: Ticker, width: number, height: number, x: number, y: number, color: number) {
    super();
    this.x = x;
    this.y = -200;
    this.rectWidth = width;
    this.rectHeight = height;
    this.color = color;
    this.pivot.set(width / 2, height / 2);
    this.interactive = true;
    this.buttonMode = true;
    //this.on('mouseover', this.empezar);
    //this.on('mouseout', this.detener);
    this.on('click', this.cambiarMovimiento);

    ticker.add(() => {
      this.actualizar();
      this.dibujar();
    });
  }
  public dibujar(): void {
    this.clear();
    this.beginFill(this.color);
    this.drawRect(0, 0, this.rectWidth, this.rectHeight);
    this.endFill();
  }

  public actualizar(): void {
    if(this.parado) {
      //this.angle += 1;
      const direccionX = Math.floor(Math.random() * 2);
      const direccionY = Math.floor(Math.random() * 2);
      this.x += direccionX === 1 ? -1 : 1;
      this.y += direccionY === 1 ? -1 : 1;
    } else {
      this.y++;
    }

    //this.y++;
  }

  public cambiarMovimiento() {
    this.parado = !this.parado;
  }

  public empezar() {
    this.parado = false;
  }

  public detener() {
    this.parado = true;
  }
}
