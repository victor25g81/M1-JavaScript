//Ejercicio 33. Crear una función para contar el número de consonantes (minúsculas y mayúsculas) 
//que tiene una palabra o frase. Debe retornar el número obtenido.

function contarconsonantes(palabra){

    let consonantes ="bcdfghjklmnñpqrstvxzwyBCDFGHJKLMNÑPQRSTVXZWY";

    let contadorconsonantes = 0;

    for (let i of palabra.toLowerCase()) {

        if (consonantes.includes(i)){

            ++contadorconsonantes;

        }
    }
    
    return contadorconsonantes;

}

let palabra = 'javascript es un lenguaje muy importante';
let resultado = contarconsonantes(palabra);

console.log('el texto original es:' +palabra);

console.log('el numero de consonantes es:' + resultado);
