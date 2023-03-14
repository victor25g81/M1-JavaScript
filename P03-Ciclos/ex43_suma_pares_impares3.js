//Ejercicio 43. Escribir una función para calcular la suma de números pares e impares.


function calcularsuma(numero){
    let sumapares= 0;
    let sumaimpares = 0;

   for (let i= 0; i < numero; ++i){
       if (i % 2 == 0){
        return sumapares = sumapares + i;           
       }
       else{
        return sumaimpares = sumaimpares + i;
       }
    }
}
console.log(calcularsuma(10));