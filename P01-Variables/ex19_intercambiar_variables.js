//Ejercicio 19. ¿Cómo intercambiar el valor de dos variables?

let a = 5
let b = 10

console.log(a, b); // 5, 10
// … Aquí sucede el campo

// let c = a
// a = b
// b = c
[a, b] = [b, a]; // Desempaquetamiento
console.log(a, b); // 10, 5

console.log()

let x = 5;
let y = 10;
console.log('Antes: x = ', x, ' y = ', y);
[x, y] = [y, x];
console.log('Después: x = ', x, ' y = ', y);
