//Ejercicio 31. Crear una función para determinar si la longitud de un texto es para o impar.


function es_longitud_par(texto){

    const longitud = texto.length;

    return longitud % 2 == 0;
}

let texto = prompt("Digite palabra:");

let resultado = es_longitud_par(texto);

console.log(resultado);

if (resultado) {
    alert(`La palabra o frase "${texto}" tiene longitud par.`);
} else {
    alert(`La palabra o frase "${texto}" tiene longitud impar.`);
}
