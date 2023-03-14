let sueldos = [1000, 3000, 2000, 5000];

// Calcule la suma total de esos sueldos: 11000

// 1. Sumar usando un ciclo while:
let indice = 0;
let suma = 0;

while (indice < sueldos.length) {
    suma += sueldos[indice];

    indice += 1; // ++indice; indice = indice + 1;
}

console.log(`1. Usando while. Suma igual a: ${suma}`);

console.log();

// 2. Sumar usando un ciclo for de iteración por índices:
suma = 0;

for(let i = 0; i < sueldos.length; ++i) { //i++
    suma += sueldos[i];
}

console.log(`2. Usando for con índices. Suma igual a: ${suma}`);

console.log();

// 3. Sumar usando un ciclo for por elementos:
suma = 0;

for(const e of sueldos) {
    suma += e;
}

console.log(`3. Usando for por elementos (for-of). Suma igual a: ${suma}`);

console.log();

// 4. Sumar usando un ciclo for de iteración de índices:

suma = 0;

for(const i in sueldos) {
    suma += sueldos[i];
}


console.log(`4. Usando for por índices (for-in). Suma igual a: ${suma}`);
