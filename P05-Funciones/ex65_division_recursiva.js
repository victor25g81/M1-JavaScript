//Ejercicio 65. Crear una función recursiva para calcular la división entera de dos números.
//Una división es entera cuando el resto es distinto de cero.
//En una división entera el dividendo es igual al divisor por el cociente más el resto.

function divisionrecursiva(dividendo,divisor){

    if(dividendo % divisor ==0 && dividendo < divisor){
        return 0;
    }else{

        return 1 + divisionrecursiva(dividendo - divisor, divisor);
    }
}

console.log(divisionrecursiva(10,2));

