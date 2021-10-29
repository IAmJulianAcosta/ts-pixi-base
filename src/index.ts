import Canvas from './canvas';
import {Graphics} from "pixi.js";
import Nave from "./nave/nave";

window.onload = function () {
  new Canvas(800, 600, 0x000000);
}

const switches: boolean[] = [true, false, false, false, true];
const numeros2: (number | string)[] = ["uno", 2, 3, "cuatro"];

const numeros: (number | string)[] = [1, 2, 3, 4, 5, 6];

(() => {
  // Tamaño del array
  console.log("numeros.length", numeros, numeros.length);

// Agrega un elemento al final
  numeros.push(7);
  console.log("numeros.push(7)", numeros, numeros.length);

// Agrega un elemento al inicio
  numeros.unshift(0);
  console.log("numeros.unshift(0)", numeros, numeros.length);

// Remueve el ultimo elemento
  numeros.pop();
  console.log("numeros.pop()", numeros, numeros.length);

// Borra elementos en cierto lugar
  numeros.splice(2, 2);
  console.log("numeros.splice(2, 2)", numeros, numeros.length);

// Borra elementos en cierto lugar y agrega otros
  numeros.splice(2, 1, "dos", "tres", "cuatro");
  console.log('numeros.splice(2, 1, "dos", "tres", "cuatro"', numeros, numeros.length);

// Revisa el índice de un elemento
  let index: number = numeros.indexOf("dos");
  console.log('numeros.indexOf("dos")', index);

  index = numeros.indexOf(2);
  console.log('numeros.indexOf(2)', index);

// Borrar elemento en un lugar específico
  index = numeros.indexOf(5);
  if (index !== -1) {
    numeros.splice(index, 1);
    console.log('numeros.splice(index, 1)', numeros, numeros.length);
  }

  console.log(numeros.includes("dos"));

  type Posicion = { x: number, y: number };
  const posiciones: Posicion[] = [
    {x: 54, y: 51},
    {x: 30, y: 100},
    {x: 100, y: 50},
    {x: 49, y: 30}
  ];

// Buscar objeto en el arreglo
  index = posiciones.findIndex((posicion: Posicion) => {
    return posicion.x === 30;
  });
  console.log('numeros.findIndex()', index);
  if (index !== -1) {
    posiciones.splice(index, 1);
    console.log('numeros.posiciones(index, 1)', posiciones, posiciones.length);
  }

  const posicion100: Posicion | undefined = posiciones.find((posicion: Posicion) => {
    return posicion.x === 100 && posicion.y === 50;
  });
  console.log('posicion100', posicion100);

// Iteracion en un arreglo de objetos
  posiciones.forEach((posicion: Posicion) => {
    posicion.y += 100;
    console.log(posicion.y);
  });

  const posiciones2: Posicion[] = [
    {x: 254, y: 51},
    {x: 230, y: 100},
  ];

  const posicionesDesordenadas: Posicion[] = [
    {x: 34, y: 92},
    {x: 89, y: 29},
    {x: 74, y: 10},
    {x: 75, y: 10},
    {x: 76, y: 10},
    {x: 77, y: 10},
    {x: 78, y: 10},
  ];

  type FuncionOrdenadora = (a: Posicion, b: Posicion) => number;

  const funcionOrdenarEnX: FuncionOrdenadora = (a: Posicion, b: Posicion) => {
    return a.x - b.x;
  }
  const funcionOrdenarEnY: FuncionOrdenadora = (a: Posicion, b: Posicion) => {
    return b.y - a.y;
  }

  const funcionOrdenarTodo: FuncionOrdenadora = (a: Posicion, b: Posicion) => {
    if (a.y === b.y) {
      return b.x - a.x;
    }
    return b.y - a.y;
  }
//posicionesDesordenadas.sort(funcionOrdenarEnY);
  posicionesDesordenadas.sort(funcionOrdenarEnX);
  console.log('posicionesOrdenadas', posicionesDesordenadas.concat([]));

  posicionesDesordenadas.reverse();
  console.log('posicionesOrdenadas', posicionesDesordenadas);



  return;

  const strings = [
    "0",
    "z",
    "bb",
    "B",
    "a",
    "á",
    "P",
    "p",
    "c",
    "aa",
    "ñ",
    "J",
    "y"
  ]

  strings.sort((a: string, b: string): number => {
    return a.localeCompare(b);
  });
  console.log(strings);

  const posicionesEnXX: number[] = posicionesDesordenadas.map((p: Posicion): number => {
    return p.x;
  });

  posicionesEnXX.sort((xUno: number, xDos: number): number => {
    return xDos - xUno;
  });

  console.log(posicionesEnXX);


///////////// NO CAMBIAN EL ARREGLO ORIGINAL  ///////////
// Unir dos arreglos
  const posiciones3: Posicion[] = posiciones.concat(posiciones2);
  console.log('posiciones', posiciones);
  console.log('posiciones2', posiciones2);
  console.log('posiciones3', posiciones3);

// Filtrar un arreglo
  const posicionesALaDerecha: Posicion[] = posiciones3.filter((posicion: Posicion) => {
    return posicion.x >= 100;
  });

  console.log('posiciones3.filter', posicionesALaDerecha);
  console.log('posiciones3', posiciones3);

// Generar un nuevo arreglo a partir de otro
  const posicionesEnX: string[] = posiciones3.map((posicion: Posicion) => {
    return `La posicion en x es: ${posicion.x}`;
  });

  console.log('posiciones3.map', posicionesEnX);

// Generar un nuevo arreglo con algunos de los elementos (sacando una porcion)

// Eliminar ciertos elementos
  const posiciones4: Posicion[] = posiciones3.slice(2, 4);
  console.log('posiciones4', posiciones4);

// Eliminar ciertos desde cierta posicion
  const posiciones5: Posicion[] = posiciones3.slice(1);
  console.log('posiciones5', posiciones5);

// Eliminar ciertos hasta cierta posicion
  const posiciones6: Posicion[] = posiciones3.slice(0, 3);
  console.log('posiciones6', posiciones6);

})();


