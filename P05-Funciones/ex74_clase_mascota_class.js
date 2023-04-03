//Ejercicio 74. Crear una función de clase para representar las operaciones y atributos de una mascota.

class Mascota {
  constructor(tipoanimal, color, raza, tamaño) {
    this.tipoanimal = tipoanimal;
    this.color = color;
    (this.raza = raza), (this.tamaño = tamaño), (this.mtsrecorridos = 0);
    this.velocidad = 0;
  }

  correr(velocidad) {
    if (velocidad > 0) {
      console.log("salio a correr a " + velocidad, "km por hora");
    } else {
      console.log("esta dormido");
    }
  };

  distancia (mtsrecorridos) {
    if (mtsrecorridos > 0) {
      console.log("recorrio:", +mtsrecorridos, "mts");
    } else {
      console.log("no tuvo recorridos");
    }
  };
}

const mascota1 = new Mascota("perro", "cafe", "pitbull", "grande");

mascota1.correr(100);
mascota1.distancia(200);
