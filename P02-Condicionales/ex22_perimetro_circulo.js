//Ejercicio 22. Crear una función para calcular el perímetro de un círculo. Se debe validar el radio 
//antes de llamar a la función.

function calcular_perimetro(radio){

    let resultado = radio * pi * 2;
    return resultado;
 }

 let pi = 3.1416
 let radio = parseFloat(prompt("ingrese el Radio del circulo"));

 if (radio > 0) {
    alert ("es positivo");

    console.log(calcular_perimetro(radio))
 }

 else{
    alert("debe digitar numero positivo");
 }
