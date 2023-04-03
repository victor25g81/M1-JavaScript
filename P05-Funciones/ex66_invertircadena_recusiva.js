//Ejercicio 65. Por medio de una función recursiva invertir una cadena de caracteres.

function invertircadena(palabra) {
  if (!palabra.length) {
    return "";
  } else {
    // Paso recursivo: divide la cadena en el primer caracter y el resto de la cadena

    var ultimoCaracter = palabra.slice(palabra.length - 1, palabra.length);
    palabra = palabra.slice(0, palabra.length - 1);

    // Invierte recursivamente el resto de la cadena y agrega el primer caracter al final
    return ultimoCaracter + invertircadena(palabra);
  }
}

var palabra = "java script es el mejor";

var palabrareverse = invertircadena(palabra);

console.log(palabra);

console.log(palabrareverse);
