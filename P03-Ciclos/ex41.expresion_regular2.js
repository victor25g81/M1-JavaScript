////Ejercicio 41. Usar una expresión regular para extraer todas las vocales existentes en un texto.

//La "g" después de la expresión regular es una opción o indicador que realiza una búsqueda global, 
//buscando en toda la cadena y devolviendo todas las coincidencias.

const expresion = 'Javascript';
const expresionregular = /[aeiouAEIOUáéíóú]/g;
const solovocales = expresion.match(expresionregular);

console.log(solovocales);

