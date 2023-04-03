function sumarDigitos(numero) {
    let suma = 0;

    while(numero > 0) {
        const unidades = numero % 10;
        suma += unidades;

        numero = Math.floor(numero / 10);
    }

    return suma;
}

console.log(sumarDigitos(123)); // 6
console.log(sumarDigitos(453)); // 12
console.log(sumarDigitos(4783)); // 22
