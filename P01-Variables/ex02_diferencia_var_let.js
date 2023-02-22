// Diferencia entre var y let:

lenguajeFavorito = 'JavaScript';

console.log('Su lenguaje favorito es:', lenguajeFavorito);

console.log();


// for(var i = 1; i <= 10; ++i) {
//     console.log('El valor actual de i es igual a', i);
// }

// console.log('El último valor de la variable i (var) fue', i);

// for(let i = 1; i <= 10; ++i) {
//     console.log('El valor actual de i es igual a', i);
// }

// console.log('El último valor de la variable i (var) fue', i);

console.log();

function mostrarNombre(nombre) {
    var resultado = 'Su nombre es: ' + nombre;

    console.log(resultado);
}

mostrarNombre('Víctor');

// ¿La variable resultado que se creó en la función mostrarNombre se puede consultar por fuera de la función?
// Rta.: NO se puede utilizar una variable declarada con var por fuera de la función.
// console.log('Contenido de la variable resultado:', resultado);
