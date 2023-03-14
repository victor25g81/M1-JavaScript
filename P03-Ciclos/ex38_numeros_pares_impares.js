//Ejercicio 38. Contar cuántos números pares e impares hay en un arreglo. Nota: Debe usar dos contadores 
//distintos.

//function paresimpares(numeros){

let numeros = [10,11,15,16,19,20,40,60];
     
    contadorpares = 0;
    contadorimpares = 0;

    for (let i =0; i<= numeros.length; ++i){

        if (numeros[i] % 2 ==0){

    //for (const i of numeros){
        
    //    if(i%2==0){

            ++contadorpares;
    
        }else{

            ++contadorimpares; 
       }
        
    }

//}

//let resultado = paresimpares(10,12,1,15,30,40,60);

console.log(contadorpares);
console.log(contadorimpares); // undefined