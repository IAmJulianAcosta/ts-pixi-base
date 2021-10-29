import {Application} from 'pixi.js';
import {FederatedPointerEvent} from '@pixi/events';

import Rectangulo from "./rectangulo";
import CircleMask from "./masks/circle-mask";
import Nave from "./nave/nave";
import TimerFijo from "./TimerFijo";
import TimerVariable from "./TimerVariable";

export default class Canvas {
  private app: Application;
  mouseX: number = 0;
  mouseY: number = 0;

  constructor(
    width: number,
    height: number,
    backgroundColor: number = 0xFFFFFF,
    element: HTMLElement = document.body
  ) {
    this.app = new Application({width, height, backgroundColor, antialias: true});
    this.app.view.oncontextmenu = (e) => {
      e.preventDefault();
    };


    this.app.ticker.minFPS = 60;
    this.app.ticker.maxFPS = 120;
    element.appendChild(this.app.view);
    const centerX = this.app.screen.width / 2;
    const centerY = this.app.screen.height / 2;
    // const mask = new CircleMask(this.app.ticker, 300, centerX, centerY);
    // this.app.stage.addChild(mask);
    // mask.addChild(new Rectangulo(this.app.ticker, 400, 400, centerX, centerY));
    const nave: Nave = new Nave(this.app.ticker, centerX, centerY);
    const nave2: Nave = new Nave(this.app.ticker, 100, 100);

    this.app.stage.addChild(nave, nave2);
    this.app.stage.interactive = true;
    this.app.stage.on('pointermove', (event: FederatedPointerEvent) => {
      this.mouseX = Math.round(event.data.global.x);
      this.mouseY = Math.round(event.data.global.y);
      console.log(this.mouseX, this.mouseY);
    });

    let contador = 0;

    const timer: TimerFijo = new TimerFijo(() => {
      //console.log('fijo');
    }, 1000);

    const timerVariable: TimerVariable = new TimerVariable(
      () => {
        console.log('variable');
      },
      () => {
        return this.random(100, 10000);
      }
    );
  }

  private demoArrays() {
    const posiciones: { x: number, y: number }[] = [
      {x: 54, y: 501},
      {x: 30, y: 300},
      {x: 100, y: 450},
      {x: 490, y: 230}
    ];

    const posicionesALaDerecha: { x: number, y: number }[] = posiciones.map((posicion: { x: number, y: number }) => {
      return {
        x: posicion.x + 200,
        y: posicion.y
      }
    });

    const rectangulos: Rectangulo[] = posiciones.map((posicion: { x: number, y: number }) => {
      return new Rectangulo(this.app.ticker, 100, 100, posicion.x, posicion.y, 0x800000);
    });

    const rectangulosALaDerecha: Rectangulo[] = posicionesALaDerecha.map((posicion: { x: number, y: number }) => {
      return new Rectangulo(this.app.ticker, 100, 100, posicion.x, posicion.y, 0x000080);
    });

    this.app.stage.addChild(...rectangulos, ...rectangulosALaDerecha);
  }

  public random(min: number, max: number): number {
    const intervalo: number = max - min;
    const valor: number = Math.floor(Math.random() * intervalo);
    const valorFinal: number = valor + min;
    return valorFinal;
  }

}
