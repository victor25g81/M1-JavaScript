//Ejercicio 36. Cree una función para invertir una cadena de caracteres. Ejemplos: casa debería ser asac;
// caballo debería ser ollabac.


function invertircadena(frase){

    var nuevafrase = "";

    for (var i = frase.length -1; i >= 0; i--){

        nuevafrase  += frase[i];
   } //este cierre de llave funciona correctamente el contador
        return nuevafrase;
 //   } //este cierre de llave solo toma el ultimo caracter y el contador no funciona

}

let resultado = invertircadena('javascript es un lenguaje importante');

console.log(resultado);




//let frase = prompt ("infrese frase");

//let resultado = invertircadena(frase);

//console.log(resultado);