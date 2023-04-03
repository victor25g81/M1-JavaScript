//Ejercicio 61. Escribir una función recursiva para sumar los números de un arreglo.

function sumarecursiva(numeros){

    //se crea el caso base utilizando el operador '==='para validar si es del mismo tipo y valor, si se cumple 
    //se retorna cero de lo contrario se manda llamar a la funcion recursiva.

    if (numeros === 0){
        return 0;
    }else{
        //se llama a la funcion recursiva y se suma numero al resultado de numero -1
        return numeros + sumarecursiva(numeros-1); //n= 10 + n=9+ n= 8+ n= 7+ n= 6+ n=5+ n=4+ n=3+ n=2+ n=1
    }
}

let resulrado = sumarecursiva(20);

console.log(resulrado);