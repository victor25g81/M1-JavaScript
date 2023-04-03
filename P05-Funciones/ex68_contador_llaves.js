//Ejercicio 68. Crear una función que cuente el número de llaves/propiedades que tiene un objeto.

function objetolibros(libros){
  return Object.keys(libros).length;
}
let libros = {
    libro1: 10,
    libro2: 25,
    libro3: 30,
    libro4: 40,
    libro5: 50,
    libro6: 60,
  };
console.log(objetolibros(libros));