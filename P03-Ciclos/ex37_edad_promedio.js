//Ejercicio 37. Capturar la edad de N cantidad de personas e indicar su promedio.


//function edadpromedio(personas){

//    let sumaedad = 0;

    personas = [20,25,30,20,40,32];
    sumaedad = 0;
    for (const e of personas) {

        sumaedad += e;

    }

    console.log(sumaedad);

    console.log()

    let promedio = sumaedad / personas.length;

    console.log('el promedio de edad es:' +promedio);



console.log();
console.log();



let sumaSalarios = 0;

for (const e of sueldos) {
    sumaSalarios += e;
}

promedio = sumaSalarios / sueldos.length;

console.log('El promedio es: ', promedio);


//let sueldos = [1000, 3000, 2000, 5000];
//suma = 0;

//for(const e of sueldos) {
//    suma += e;
//}


