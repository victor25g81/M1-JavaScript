// DIFERENTES MANERAS DE DECLARAR FUNCIONES

// 1. Función nombrada:
function lanzarDado() {
    return 1 + Math.floor(Math.random() * 6);
}

// 2. Función ánonima:
let lanzarDado6 = function() {
    return 1 + Math.floor(Math.random() * 6);
}

// 3. Función anónima con una expresión lambda:
let lanzarDado1y6 = () => {
    return 1 + Math.floor(Math.random() * 6);
}

console.log('lanzarDado(): ', lanzarDado());
console.log('lanzarDado6(): ', lanzarDado6());
console.log('lanzarDado1y6(): ', lanzarDado1y6());
