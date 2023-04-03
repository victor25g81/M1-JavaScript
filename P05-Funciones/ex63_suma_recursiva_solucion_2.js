//Ejercicio 63. Usando recursividad, calcular la suma de dos números.

function sumar(a, b) {
    if (b == 0) {
        return a['valor'];
    } else {
        a['valor'] += 1;
        return sumar(a, b - 1);
    }
}

console.log(sumar({valor: 2}, 3));
