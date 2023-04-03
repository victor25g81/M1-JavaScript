//¿Qué son los números primos?
//Los números primos son aquellos que solo son divisibles entre ellos mismos y el 1, es decir, 
//que si intentamos dividirlos por cualquier otro número, el resultado no es entero.

//Ejercicio 50. Crear una función que devuelva un arreglo con todos los números primos que hay en el rango 
//de 2 a 100.

function esPrimo(numero) {
  let contadorDivisores = 0;

  for(let i = 1; i <= numero; ++i) {
    if (numero % i == 0) {
      ++contadorDivisores;
    }
  }

  return contadorDivisores == 2;
}

function generarPrimos(numero) {

    const numerosprimos = [];

    for (let i = 2; i <= numero; i++) {
  
      if (esPrimo(i)) {
        numerosprimos.push(i);
      }
    }
    return numerosprimos;
  }

  console.log(generarPrimos(15));