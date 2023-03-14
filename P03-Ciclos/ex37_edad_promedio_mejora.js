//Ejercicio 37. Capturar la edad de N cantidad de personas e indicar su promedio.


function calcularPromedio(datos) {
    let suma = 0;
    for (const e of datos) {
        suma += e;
    }

    return suma / datos.length;
}

//function edadpromedio(personas){

//    let sumaedad = 0;

let edadPersonas = [20,25,30,20,40,32];

let promedio = calcularPromedio(edadPersonas);

console.log('el promedio de edad es:' + promedio);


console.log();

let sueldos = [1000, 3000, 2000, 5000];

promedio = calcularPromedio(sueldos);

console.log('El promedio de los salarios es: ', promedio);

console.log();
console.log();

let notasEstudiante = [6.6, 7.8, 7.7, 8.9, 9.5];

promedio = calcularPromedio(notasEstudiante);

console.log('El promedio de las notas del estudiante es:', promedio);


//let sueldos = [1000, 3000, 2000, 5000];
//suma = 0;

//for(const e of sueldos) {
//    suma += e;
//}
