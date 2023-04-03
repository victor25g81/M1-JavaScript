//Ejercicio 77. Crear una clase (class) para representar los atributos y funciones/métodos de un computador.

class Computador {
  constructor(
    numeroSerie,
    marca,
    tamaño,
    cpu,
    procesador,
    memoria,
    discoDuro,
    mouse
  ) {
    this.numeroserie = numeroSerie;
    this.marca = marca;
    this.tamaño = tamaño;
    this.cpu = cpu;
    this.procesador = procesador;
    this.memoria = memoria;
    this.discoduro = discoDuro;
    this.mouse = mouse;
    this.encendida = false;
  }

  encender() {
    if (!this.encendida) {
      console.log("computadora encendida");
      this.encendida = true;
    } else {
      console.log("ya esta encendida");
    }
  }

  apagar() {
    if (this.encendida) {
      console.log("apagar computador");
    } else {
      console.log("la computadora esta apagara");
    }
  }

  reinicar() {
    if (this.encedida) {
      console.log("reinicar computador");
    } else {
      console.log("ya se reinicio");
    }
  }
}

const computadora = new Computador(
  "ade54100",
  "IBM",
  20,
  "NEGRO",
  "INTEL",
  128,
  "30TB",
  "NEGRO"
);

console.log(computadora);

computadora.encender();
computadora.apagar();
computadora.reinicar();
