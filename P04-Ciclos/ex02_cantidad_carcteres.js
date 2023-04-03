// Dados los nombres de 5 personas, contar el total de caracteres que hay en los nombres:

let nombres = ['Paola', 'Pedro', 'Diana', 'Luis', 'Vicente F.'];   // 29
function contadorcaracteres(nombres){

    let contador = 0;

    for (const i of nombres){

        contador += i.length;
    }

    return contador;

}

console.log(contadorcaracteres(nombres));
