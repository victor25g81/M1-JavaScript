function sumadeparesoimpares(numeros){
    var sumapares = 0
    var sumaimpares = 0
    
    for (var i=1; i <= numeros; i++){
      if (i%2 == 0) {
        sumapares += i
      }
      else{
        sumaimpares += i
      }
    }

    return [sumapares, sumaimpares];
}
  
  let resultado = (sumadeparesoimpares(10));//1,2,3,4,5,6,7,8,9,10

  console.log('La suma de los pares es:', resultado[0])
  console.log('La suma de los impares es:', resultado[1])
