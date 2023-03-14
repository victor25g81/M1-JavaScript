//Ejercicio 17. Crear una función que retorne unidos (concatenados) el primer nombre y 
//primer apellido de una persona.

function concatenar(nombre,apellido){

    var nombre_completo = 'su nombre es: ' + nombre + " " + apellido;

    return nombre_completo;

}

let resultado = concatenar('Víctor', 'De la Fuente');
console.log(resultado);
