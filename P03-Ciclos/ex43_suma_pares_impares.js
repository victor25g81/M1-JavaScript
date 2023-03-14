//Ejercicio 43. Escribir una función para calcular la suma de números pares e impares.

function calcularsuma(numero){
     var sumapares= 0;
     var sumaimpares = 0;
    for (var i= 0; i < numero; ++i){
        if (i % 2 == 0){
            sumapares+= i;           
            return sumapares;
            }
            else{
                sumaimpares+= i;
                return sumaimpares;
            }
        }       
}
console.log(calcularsuma(4));



