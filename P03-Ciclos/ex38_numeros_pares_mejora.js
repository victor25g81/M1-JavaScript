//Ejercicio 38. Contar cuántos números pares e impares hay en un arreglo. Nota: Debe usar dos contadores 
//distintos.

function paresimpares(numeros){

const numeros = [10,11,15,16,19,20,40,60];
     
    contadorpares = 0;
    contadorimpares = 0;

    for (let i =0; i<= numeros.length; ++i){

        if (numeros[i] % 2 ==0){
            
            ++contadorpares;

            return contadorpares;
    
        }else{

            ++contadorimpares; 

            return contadorimpares;
       }
        
    }

}

let resultado = paresimpares(numeros);

console.log(contadorpares);
console.log(contadorimpares); // undefined