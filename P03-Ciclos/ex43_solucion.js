function sumaDeLosParesDel0Al(x){
    var suma = 0
    for (var i=1; i<x; i++){
      if (i%2 == 0) {
        suma += i
      }
    }
    return suma
  }
  
console.log(sumaDeLosParesDel0Al(4));//1,2,3,4,5,6,7,8,9,10