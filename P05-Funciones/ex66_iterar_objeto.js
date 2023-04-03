// Ejercicio 66. ¿Cómo iterar las llaves de un objeto?

//  puedes iterar las llaves de un objeto usando un bucle for...in. 

const miObjeto = { a: 1, b: 2, c: 3 };

for (const key in miObjeto) {
  console.log(key); // Imprime "a", "b" y "c" en consola
}

console.log();

for(const k of Object.keys(miObjeto)) {
  console.log('Llave:', k, ' - Valor:', miObjeto[k]);
}

console.log();

let persona = {
  nombre: 'Víctor',
  email: 'victor@mail.co',
  ubicacion: {
    pais: 'México',
    ciudad: 'Coahuila',
    mapa: {
      latitud: 1.223546,
      longitud: -76.45646465
    }
  },
  ahorros: 20000,
  fechaRegistro: '2023-03-01'
}

for(const k in persona) {
  console.log(k);

  if (typeof persona[k] === 'object') {
    for(const k2 in persona[k]) {
      console.log('--', k2);

      if (typeof persona[k][k2] === 'object') {
        for(const k3 in persona[k][k2]) {
          console.log('----', k3)

        }
      }
    }
  }
}