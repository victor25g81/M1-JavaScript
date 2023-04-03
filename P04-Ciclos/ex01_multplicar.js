// Multiplicar todos los elementos numéricos de un arreglo.

let numeros = [2, 3, 5, 7, 11];


function multiplicar(numeros){
    
    let resultado = 1;

    for (const e of numeros){

        resultado *= e;

    }

    return resultado;
}

console.log(multiplicar(numeros));
