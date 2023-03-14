//Ejercicio 41. Usar una expresión regular para extraer todas las vocales existentes en un texto.

function vocales(texto){
    const expresionregular = /[aeiouAEIOUáéíóú]/g; //la "g" es para hacer busqueda global
    
    const solovocales = texto.match(expresionregular);

    return [...new Set(solovocales)];
}


console.log(vocales('javascript es potente'));
