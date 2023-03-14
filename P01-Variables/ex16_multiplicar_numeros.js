//Ejercicio 16. Crear una función para multiplicar dos números ingresados por el usuario con prompt().

function multiplicar(numero1, numero2){

    let resultado = numero1 * numero2;

    return resultado;
}

let numero1 = prompt("digite primer numero");

let numero2 = prompt("digite el segundo numero");

let resultado = multiplicar(numero1, numero2);

console.log("el area del triangulo es:" + resultado);
