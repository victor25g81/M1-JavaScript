//Ejercicio 72. Crear una función de clase (generadora de objetos, la vista en clase) para representar una cuenta
// bancaria. Debe tener atributos para nombre del titular, tipo de cuenta, número de cuenta, banco, saldo actual.
//Y también funciones para: retirar y consigna

class cuentabancaria {
    
    constructor(nombrecliente, numerocuenta, tipocuenta, banco, saldoactual){

    this.nombrecliente = nombrecliente;
    this.numerocuenta = numerocuenta;
    this.tipocuenta = tipocuenta;
    this.banco = banco;
    this.saldoactual = saldoactual;


 this.depositar = function(monto){

    this.saldoactual += monto;
 }

this.retirar = function(monto){

    if(this.saldoactual >= monto){
        this.saldoactual -= monto;
    }else{
        console.log("fondos insuficientes");
    }
}
}
}

let cuentavictor = new cuentabancaria('victor de la fuente', '01299', 'claisca', 'santander', '1200');

console.log(cuentavictor);

console.log(cuentavictor(500));
console.log(cuentavictor(200));
