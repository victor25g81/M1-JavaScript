//Ejercicio 24. Convertir grados Fahrenheit a Celsius. Crear y usar una función.

//Para convertir de ºF a ºC use la fórmula: ºC = (ºF-32) ÷ 1.8.

function convertir_grados_celcius(grados_fahrenheint){

    let resultado = (grados_fahrenheint - 32) / 1.8;

	return resultado;
}

let grados_fahrenheint = parseFloat(prompt("Ingresa grados fahrenheint"));

let grados_celcius = convertir_grados_celcius(grados_fahrenheint);

console.log(grados_celcius);

alert("El resultado es:"+ grados_celcius+ "C");

	
    
    
    
    
    
    
    
    
    
    
    
    //console.log(grados_centigrados+" centígrados equivalen a "+grados_fahrenheint+" farenheit");

	//alert("el resultado es:"+ grados_fahrenheint);

