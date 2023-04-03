function sumarDigitos(numero) {
    return String(numero).split('').map((d) => parseInt(d)).reduce((a, d) => (a += d, a), 0);
}

console.log(sumarDigitos(123)); // 6
console.log(sumarDigitos(453)); // 12
console.log(sumarDigitos(4783)); // 22
