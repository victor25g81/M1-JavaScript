////Ejercicio 51. Crear una función que permita generar un número entero aleatorio entre a y b.
//Los dos valores de límites deben ser parámetros de la función.

function randomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar un número aleatorio entre 1 y 10
const randomNumber = randomIntInRange(1, 10);
console.log(randomNumber); // Un número aleatorio entre 1 y 10 (ambos incluidos)
