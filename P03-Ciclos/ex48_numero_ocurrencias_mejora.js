//Escribir una función para contar el número de ocurrencias de cada vocal en una palabra.

function contarocurrencias(palabra){

    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let conteoVocales = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0,
    }

    for (const e of palabra){
        if (vocales.includes(e)) {
            conteoVocales[e] += 1;
        }
    }

    return conteoVocales;
}

let resultado = (contarocurrencias('javascript es potente y muy importante para el desarrollo web'));

console.log(resultado);
