//Ejercicio 71. Crear una función recursiva para iterar todas las propiedades de un objeto. 
//Se deben iterar aquellas propiedades anidadas.

let empleados = {

    id_empleado:2130,
    nombre: 'victor',
    telefono: 86612055,
    puesto:'diseñador',
    profession: 'ing.en sistemas',
    paisresidencia: 'Mexico',
    Idiomas:'Ingles',
};


function miobjeto(empleados){

    //declaramos caso base

    if(empleados.length === ""){

        return "";
    }else{

        return miobjeto(Object.keys(empleados));

    }
}


console.log(miobjeto(empleados));