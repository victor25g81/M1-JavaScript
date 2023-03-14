//Primero creamos la función, definiendo que debe recibir un string o palabra
function espalindromo(palabra) {

    //.split('') lo separa en un array.
    //.reverse() revierte el arreglo.
    //join('') Lo vuelve a convertir en string.
    const palabrareverse = palabra.split("").reverse().join("");

  //indicamos que si ambas cadenas son iguales devuelva 'es palindromo', y si no 'no es palindromo'.
   // return palabrareverse === palabra ? "es palindromo" : "no es palindromo";
   if (palabrareverse == palabra){

   return true;
   console.log('es palindromo');

   }else{

    return false;
    console.log('no es palindromo');
   }

   }
  console.log(espalindromo("oso")); // es palindromo
  console.log(espalindromo("hola")); // no es palindromo
  console.log(espalindromo("omo")); // es palindromo