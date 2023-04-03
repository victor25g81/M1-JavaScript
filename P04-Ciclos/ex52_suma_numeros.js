//Ejercicio 52. Sumar todos los números de 1 hasta N. Crear una función. El valor N debe ser ingresado por el usuario.

function suma(numero){

    let contador = 0;

    for (let i = 1; i <= numero; ++i){

        contador+=i;
    }

    return contador;
}

let numero = parseInt(prompt('ingrese numero'));
let resultado = suma(numero);

alert(resultado);
