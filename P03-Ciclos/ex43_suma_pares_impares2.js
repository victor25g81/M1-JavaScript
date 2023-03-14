let numeros = [10,11,15,16,19,20,40,60];
     
    sumapares = 0;
    sumaimpares = 0;

    for (const e of numeros){

        if (e % 2 ==0){

  
            sumapares+=e;
    
        }else{

            sumaimpares+=e; 
       }
        
    }

console.log(sumapares);
console.log(sumaimpares); // undefined