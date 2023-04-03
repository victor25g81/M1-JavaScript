//Ejercicio 61. Escribir una función recursiva para sumar los números de un arreglo.

function sumarnumeros(numeros, indice = 0) {
  if (indice === numeros.length) {
    return 0;
  } else {
    return numeros[indice] + sumarnumeros(numeros, indice + 1);
  }
}

const numeros = [100, 500, 300, 200, 700];
const resultado = sumarnumeros(numeros); // 1800
console.log(resultado);
