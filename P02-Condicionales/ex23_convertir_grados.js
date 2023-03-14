//Ejercicio 23. Convertir grados Celsius a Fahrenheit. Crear y usar una función.

//Para convertir de ºC a ºF use la fórmula: ºF = ºC x 1.8 + 32.

function convertir_grados_celcius(grados_celcius){

    const resultado = (grados_celcius * 1.8)+32;

	return resultado;
}

	let grados_celcius = parseFloat(prompt("Ingresa grados celcius"));

	let grados_fahrenheint = convertir_grados_celcius(grados_celcius);

	console.log(grados_fahrenheint);

	alert("El resultado es:"+ grados_fahrenheint+ "F");

	//console.log(grados_centigrados+" centígrados equivalen a "+grados_fahrenheint+" farenheit");

	//alert("el resultado es:"+ grados_fahrenheint);

