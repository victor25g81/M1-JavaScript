//Ejercicio 18. ¿Cómo se puede obtener la fecha y hora actual en JS? Escribir el código necesario. 
//Sólo son necesarias dos líneas de código.

let horaFechaActual = new Date();
console.log(horaFechaActual.toUTCString());

let resultado = horaFechaActual.toLocaleString('es-ES', { timeZone: 'America/Mexico_City' });
console.log(resultado);
