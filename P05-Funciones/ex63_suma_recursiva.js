//Ejercicio 63. Usando recursividad, calcular la suma de dos números.

function suma(a,b){

    //caso base para evitar que la funcion se llame de forma infinita

    if (a === 0 && b === 0){ //comprueba si valor a y b son iguales a cero, si es asi retorna 0
        return 0;
    }else{ // de lo contrario manda llamar a la funcion 
        return a + suma(b,0); //se manda llamar la funcion para la recursividad sumando el valor de a + valor b
    }
}

console.log(suma(10,20));