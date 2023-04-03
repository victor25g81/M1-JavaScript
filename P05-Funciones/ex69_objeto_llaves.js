//Ejercicio 69. Dado un objeto, crear una función que extraiga sólo las llaves (indicadas en un arreglo) 
//y sus respectivos valores. La función debe retornar un objeto.
let carros = {

    marca: "nissan",
    modelo: 2009,
    color: "rojo",
    tipo: "auto de lujo",

};

console.log(carros);

console.log()

function leerobjeto(carros){

    return Object.keys(carros)

}
leerobjeto(carros);

console.log(leerobjeto(carros));

for (const k of Object.keys(carros)){

    console.log('Llave:', k, ' - Valor:', carros[k])
}

for (const k in carros){
    console.log(k);


}


console.log();

function empleados(idempleado, nombre,  puesto, telefono, profession, idiomas, paisresidencia){

    this.nombre = nombre;
    this.idempleado  = idempleado;
    this.puesto = puesto;
    this.telefono = telefono;
    this.profession = profession;
    this.idiomas = idiomas;
    this.paisresidencia = paisresidencia;

    this.mostrarDatos = function (){

        console.log(`Mostrar Informacion: ${this.idempleado} ${this.nombre}`);
    }
}

let victor = new empleados('103040', 'victor de la fuente');

console.log(victor);