//Ejercicio 51. Crear una función que permita generar un número entero aleatorio entre a y b. 
//Los dos valores de límites deben ser parámetros de la función.

//Ejemplo: generarEnteroAleatorio(2, 10)

function numeroaleatorio(a,b){

     const a = 10;
     const b = 100;

    let resultado = Math.random()*(b-a)+min;

    return resultado;
}

console.log(numeroaleatorio(a,b));
