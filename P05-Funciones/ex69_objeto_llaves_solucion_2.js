//Ejercicio 69. Dado un objeto, crear una función que extraiga sólo las llaves (indicadas en un arreglo) 
//y sus respectivos valores. La función debe retornar un objeto.

function extraerAtributos(objeto, atributos) {
    const resultado = {};

    for(const e of atributos) {
        if (objeto[e]) {
            resultado[e] = objeto[e];
        }
    }

    return resultado;
}


let carro = {
    marca: "nissan",
    modelo: 2009,
    color: "rojo",
    tipo: "auto de lujo",
};

console.log(carro);
console.log();

let respuesta = extraerAtributos(carro, ['marca', 'color']);
console.log(respuesta); // {marca: 'nissan', color: 'rojo'}

console.log();

respuesta = extraerAtributos(carro, ['tipo', 'pais-fabricacion', 'modelo']);
console.log(respuesta); // {marca: 'nissan', color: 'rojo'}

console.log();
console.log();

carro['pais-fabricacion'] = 'Corea del Sur';
console.log('Objeto actualizado:', carro);

respuesta = extraerAtributos(carro, ['tipo', 'pais-fabricacion', 'modelo']);
console.log(respuesta); // {marca: 'nissan', color: 'rojo', 'pais-fabricacion': 'Corea del Sur'}

console.log();
console.log();

delete carro.color;
console.log(carro);

console.log();
console.log();

carro.modelo = 2017;
console.log(carro);
