//Ejercicio 71. Crear una función recursiva para iterar todas las propiedades de un objeto.
//Se deben iterar aquellas propiedades anidadas.

function extraerAtributosRecursivo(objeto, resultado) {
  for (const k in objeto) {
    if (typeof objeto[k] === "object") {    // recursivo
      extraerAtributosRecursivo(objeto[k], resultado);
    } else { // Caso base
      resultado.push(k);
    }
  }
}

let persona = {
  nombre: "Víctor",
  email: "victor@mail.co",
  ubicacion: {
    pais: "México",
    ciudad: "Coahuila",
    mapa: {
      latitud: 1.223546,
      longitud: -76.45646465,
    },
  },
  ahorros: 20000,
  fechaRegistro: "2023-03-01",
  tieneHijos: true,
};

console.log(persona);
console.log();

let resultado = [];
extraerAtributosRecursivo(persona, resultado);
console.log(resultado);
