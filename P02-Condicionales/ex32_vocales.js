//Ejercicio 32. Crear una función para contar el número de vocales (minúsculas y mayúsculas) 
//que tiene una palabra o frase. Debe retornar el número obtenido.

//let vocales ="aeiouAEIOU";
function contarvocales(palabra){

    let vocales ="aeiouAEIOUáéíóú";

    let contadorvocales = 0;

    for (let i of palabra.toLowerCase()) {

        if (vocales.includes(i)){

            ++contadorvocales;

        }
    }

    return contadorvocales;

}

// contarvocales('javascript es un lenguaje muy importante');   // 14
// contarvocales('javascript es un lenguaje muy importante y es muy fácil de aprender');    // 22

let palabra = 'javascript es un lenguaje muy importante';
let resultado = contarvocales(palabra);

console.log('el texto original es:' +palabra);
console.log('el numero de vocales es:' + resultado);
