//Ejercicio 60. De un número de 6 dígitos, sumar sólo aquellos dígitos que son impares.

let numeros = [1,2,3,4,5,6];

function sumarimpares(numeros){
    let sumaImpares = 0;

    for (const e of numeros){
        if (e % 2 !== 0){
           sumaImpares+= e;
        }
        // ...
    }

    return sumaImpares;
}

console.log(sumarimpares(numeros));
