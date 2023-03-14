function calcularAreaTriangulo(altura, base) {
    let resultado = (altura * base) / 2;
  
    return resultado;
}

document.querySelector('#btnCalcularAreaTriangulo').addEventListener('click', function(event) {
    event.preventDefault();

    let altura = parseFloat(document.querySelector('#altura').value);
    let base = parseFloat(document.querySelector('#base').value);

    let resultado = calcularAreaTriangulo(altura, base);

    alert(`El área de un triángulo cuya base es ${base} y altura ${altura} es igual ${resultado}`);
});

