function cantidadvocales(palabra){

    //creamos una lista de vocales y la guardamos en varibale

    vocales = ["a","e","i","o","u","A","E","I","O","U"];

    //inicializamos contador

    let contador = 0;

    //iteramos sobre la cadena de texto palabra para buscar las vocales

    for (let i of palabra){//(let i of palabra.toLowerCase()){
        if (vocales.includes(i)){  //si encuentra una vocal se incremente el contador
            ++contador;
        }
    }
//if (vocales.includes(i)){
    return contador; //hacemos return para el resultado contador

}

let palabra = prompt("ingresa cadena de texto:");

let resultado = cantidadvocales(palabra);

console.log(resultado);



//if (resultado) {
    alert(`La palabra o frase "${palabra}" tiene "${resultado}" `);
//} else {
//    alert(`La palabra o frase "${palabra}" no tiene vocales`);
//}
