//Ejercicio 53. Crear funciones para calcular el área y el perímetro de un círculo. 
//El valor del radio debe ser el parámetro para ambas funciones.

//El área de un círculo es pi multiplicado por el radio al cuadrado (A = π r²).

function calcularArea(radio){

    let pi = 3.1416;

    area = pi * (radio**2);

    return area;
}

let resultado = calcularArea(5);

console.log('el area del circulo es:'+resultado);

//Perímetro de un círculo = 2.π x r, esto es porque el diámetro es el doble que el radio. Siempre.

function calcularPerimetro(radio){

    let pi = 3.1416;

    perimetro = (2 * pi) * radio;

    return perimetro;

}

let resultadoperimetro = calcularPerimetro(5);

console.log('el perimetro del circulo es:' +resultadoperimetro);