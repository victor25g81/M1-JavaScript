//Escribir una función para contar el número de ocurrencias de cada vocal en una palabra.

function contarocurrencias(palabra){

    let vocales = ['aeiouAEIOU'];

    let contador = 0;

    for (const e of palabra){

        if (e.match(vocales)){
            contador += e;
        }
    }
}

let resultado = (contarocurrencias('javascript es potente y muy importante para el desarrollo web'));

console.log(resultado);
