function Automovil(

    placa, 
    marca, 
    color, 
    krecorridos
    ){
      this.placa = placa;
      this.marca = marca;
      this.color = color;
      this.krecorridos = krecorridos;
      this.encendido = false;
      this.velocidad = 0;

this.encender = function(){

    if(!this.encendido){
        console.log("motor encendido");
        this.encendido = true;
    }else{
        console.log("ya esta encendido");
    }
}

this.apagar = function(){

    if(this.encendido){
        console.log("apagar motor");
        this.encendido = false;
        this.velocidad = 0;
    }else{
        console.log("el motor esta apagado");
    }
}

this.acelerar = function(velocidad){

    if(this.encendido){
        this.velocidad += velocidad;
        console.log("inicio con velocidad de:" +velocidad , "km/h");
    }else{
        console.log("no se puede acelerar, motor apagado");
    }
}

this.frenar = function(){

    if(this.velocidad > 0){
        console.log("frenando");
        this.velocidad = 0;
    }else{
        console.log("ya esta detenido");
    }
}
}

const auto = new Automovil("ABN-123", "NISSAN", "ROJO", 3000);

auto.encender();
auto.acelerar(100);
auto.frenar();
auto.apagar();
