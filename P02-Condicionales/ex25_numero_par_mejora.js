//Ejercicio 25. Crear una función personalizada para validar si un número es par o impar. 
//Debe devolver true si es par, false en caso contrario.

function esNumeroPar(numero){

   let resultado = (numero % 2) == 0;

   return resultado;
    
}

let numero = parseInt(prompt("ingrese numero"));

let resultado = esNumeroPar(numero);

console.log(resultado);

if(numero%2==0){
    
    alert("El número "+numero+" es par");

}else{
    
    alert("El número "+numero+" es impar");
    
}