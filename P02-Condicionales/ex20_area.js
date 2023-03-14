//Ejercicio 20. Crear una función para calcular el área de un triángulo.
//Validar que los datos ingresados por el usuario sean positivos antes de llamar a la función.
//Debe usar condicionales.

function calcularAreaTriangulo(altura, base) {
  let resultado = (altura * base) / 2;

  return resultado;
}

// parseFloat() convierte una cadena de caracteres en número real:
// altura = float(input('Digite la altura'))
let altura = parseFloat(prompt("digite la altura"));

if (altura > 0) {
  alert("Positivo");
  
  // parseFloat() convierte una cadena de caracteres en número real:
  let base = parseFloat(prompt("digite la base"));

  if (base > 0) {
    alert("Positivo");

    let resultado = calcularAreaTriangulo(altura, base);

    console.log(resultado);
  } else {
    alert('Debe digitar un valor positivo para la base.')
  }
} else {
  alert('Debe digitar un valor positivo para la altura.')
}
