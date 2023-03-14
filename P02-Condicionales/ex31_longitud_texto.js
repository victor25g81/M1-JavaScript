//Ejercicio 31. Crear una función para determinar si la longitud de un texto es para o impar.


function es_longitud_par(texto){

    const longitud = texto.length;

    if(longitud % 2===0){

  
        alert("la longitud del exto :"+texto.length+" es par");
    
    }else{
        

        alert("la longitud del texto :"+texto.length+" es impar");
        
    }

    return texto;
}

let texto = prompt("Digite palabra:");

let resultado = es_longitud_par(texto);

console.log(resultado);
