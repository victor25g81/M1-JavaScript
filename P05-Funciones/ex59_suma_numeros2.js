//funcion para sumar los numeros dentro de un rango dado en doa parametros , luego se valida fuera de funcion.
function sumanumeros(inicio, fin){

    let suma = 0;

    for (let i = inicio; i < fin; ++i){

        suma+=i;
    }
    return suma;
}
let inicio = 1;
let fin = 10;

if (inicio < fin){

    let resultado = sumanumeros(inicio,fin);

    console.log('el resultado es:'+ resultado);
}else{
    console.log('termina el programa');
}