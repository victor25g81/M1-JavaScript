//Ejercicio 42. Usar una expresión regular para reemplazar un texto por otro.

function reemplazartexto(texto){
    
    const expresionregular = texto.replace("muy importante", "un lenguaje backend")

    return expresionregular;

}

const resultado = reemplazartexto("Javascript es muy importante");
console.log(resultado);


//const texto = 'JavaScript es muy importante';
//const expresionregular = texto.replace("muy importante", "un lenguaje backend");
//console.log(expresionregular);