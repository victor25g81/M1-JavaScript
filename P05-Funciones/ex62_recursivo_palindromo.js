//Ejercicio 62. Escribir una función recursiva para validar si un texto es palíndromo.

function espalindromo(palabra){
//Si el texto tiene una longitud menor o igual a 1, la función devuelve true, ya que un texto de una sola 
//letra siempre es un palíndromo.
    if (palabra.length <= 1){
        return true;   
    }

    if (palabra[0] === palabra[palabra.length -1]){

        return espalindromo(palabra.slice(1, -1)); 'split'
}else{
    return false;
}
}
let resultado = espalindromo('victor');

console.log(resultado);

console.log();

console.log(espalindromo('oso'));

console.log();

console.log(espalindromo('ana'));
