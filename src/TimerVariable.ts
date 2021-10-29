export default class TimerVariable {
  protected cambiarIntervalo: () => number;
  protected fn: Function;
  protected activo: boolean = true;

  constructor(fn: Function, cambiarIntervalo: () => number) {
    this.fn = fn;
    this.cambiarIntervalo = cambiarIntervalo;
    this.ejecutar();
  }

  ejecutar() {
    window.setTimeout(() => {
      this.fn();
      if(this.activo) {
        this.ejecutar()
      }
    }, this.cambiarIntervalo());
  }

  detener() {
    this.activo = false;
  }
}
