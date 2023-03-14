//Ejercicio 39. Comprobar si una cadena dada es un palíndromo.
//que es un palindromo?

//Uno de los juegos lingüísticos más famosos y antiguos que existen es el de los palíndromos, 
//aquellas palabras o frases que se leen igual de izquierda a derecha que de derecha a izquierda. 
//¿Un ejemplo? Aérea: da igual que se lea empezando por delante que comenzando por detrás, el resultado es 
//siempre el mismo.

//Primero creamos la función, definiendo que debe recibir un string o palabra
function espalindromo(palabra) {

    //.split('') lo separa en un array.
    //.reverse() revierte el arreglo.
    //join('') Lo vuelve a convertir en string.
    const palabrareverse = palabra.split("").reverse().join("");

  //indicamos que si ambas cadenas son iguales devuelva 'es palindromo', y si no 'no es palindromo'.
    return palabrareverse === palabra ? "es palindromo" : "no es palindromo";
  }
  console.log(espalindromo("oso")); // es palindromo
  console.log(espalindromo("hola")); // no es palindromo
  console.log(espalindromo("omo")); // es palindromo
  console.log(espalindromo("lateleletal")); // es palindromo
  console.log(espalindromo("anitalavalatina")); // es palindromo
  console.log(espalindromo("revolver")); // NO es palindromo