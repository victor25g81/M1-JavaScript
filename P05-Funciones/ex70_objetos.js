function Estudiante(carnet, nombres, apellidos, email, telefono, carrera) {
    this.carnet = carnet;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.email = email;
    this.telefono = telefono;
    this.carrera = carrera;

    this.mostrarDatos = function() {
        console.log(`Nombre completo: ${this.nombres} ${this.apellidos}`);
    }
}

let laura = new Estudiante('123ABC-456', 'Laura Fernanda', 'Fernández Orozco', 'laura@mex.edu.mx', '+521234567894', 'Ingeníeria en IA');

console.log(laura);
console.log(typeof laura);
console.log(laura.nombres);
console.log(laura.email);

console.log();

laura.mostrarDatos();

console.log();

let pedro = new Estudiante('789XYZ-951', 'Pedro', 'Infante', 'pedro@mex.edu.mx', '+5256498731', 'Economía');
pedro.mostrarDatos();

console.log();
console.log();
console.log();

let estudiantes = [laura, pedro];

for (const e of estudiantes) {
    console.log(e.email);
}
