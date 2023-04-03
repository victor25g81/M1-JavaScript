//Ejercicio 59. Crear una función para sumar los dígitos de un número entero positivo. Las validaciones de 
//números se deben realizar por fuera de la función.

//let numero = 20;

function sumarpositivos(numero){
    let sumanumeros = 0;

    for (let i = 0; i <= numero; ++i){

        sumanumeros+=i;
    }
    return sumanumeros;
}
let numero = -20;

if (numero > 0){ // Estamos validando si el valor de la variable numero es par. ¡HAY QUE HACER UN CAMBIO!

    let resultado = sumarpositivos(numero);//1,2,3,4,5,6,7,8,9,10

    console.log('el resultado es:'+ resultado);
}else {
    console.log('el numero debe ser positivo');
}
