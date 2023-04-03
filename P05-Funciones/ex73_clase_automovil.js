//Ejercicio 73. Crear una función de clase para representar un automóvil. Debe tener atributos
// (placa, marca, color, kilómetros recorridos) y métodos (encender, apagar, acelerar y frenar).

class automovil{

    constructor(placa, marca, color, krecorridos){

        this.placa = placa;
        this.marca = marca;
        this.color = color;
        this.krecorridos = krecorridos;
        this.encendido = false;
        this.velocidad = 0;
    }

encender(){

    if(!this.encendido){
        console.log("motor encendido");
        this.encendido = true;
    }else{
        console.log("ya esta encendido");
    }
}

apagar(){

    if(this.encendido){
        console.log("apagar motor");
        this.encendido = false;
        this.velocidad = 0;
    }else{
        console.log("el motor esta apagado");
    }
}

acelerar(velocidad){

    if(this.encendido){
        this.velocidad += velocidad;
        console.log("inicio con velocidad de:" +velocidad , "km/h");
    }else{
        console.log("no se puede acelerar, motor apagado");
    }
}

frenar(){

    if(this.velocidad > 0){
        console.log("frenando");
        this.velocidad = 0;
    }else{
        console.log("ya esta detenido");
    }
}
}

const auto = new automovil("ABN-123", "NISSAN", "ROJO", 3000);

auto.encender();
auto.acelerar(100);
auto.frenar();
auto.apagar();
