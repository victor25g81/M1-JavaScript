//Ejercicio 49. Escribir una función para validar si un año es bisiesto o no. true, si lo es, false en caso contrario.

function añobiciesto(año) {
  if (año % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log("el año es:" + añobiciesto(1988));
console.log();
console.log("el año es:" + añobiciesto(1992));
console.log();
console.log("el año es:" + añobiciesto(1996));
console.log();
console.log("el año es:" + añobiciesto(1993));
console.log();
console.log("el año es:" + añobiciesto(1997));
