////Ejercicio 51. Crear una función que permita generar un número entero aleatorio entre a y b. 
//Los dos valores de límites deben ser parámetros de la función.

//Ejemplo: generarEnteroAleatorio(2, 10)

var a =100.5;
var b = 2000;
function generarEnteroAleatorio(a,b){

//    const a = 10;
//    const b = 100;

    let resultado = Math.floor(Math.random()*(b-a)+a); //use el metodo floor para redondear numero si es necesario

    return resultado;
}

console.log(generarEnteroAleatorio(a,b));
