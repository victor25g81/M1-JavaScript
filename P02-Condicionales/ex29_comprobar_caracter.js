let frase = 'Esto es una cadena';
console.log(frase.indexOf('e'));
console.log(frase.search('e'));

console.log();

console.log(frase.search('[oe]'));  // 3
console.log(frase.search('[eo]'));  // 3
console.log(frase.search('[eoE]'));  // 0
console.log(frase.search('[Eeo]'));  // 0
console.log(frase.search('[oEe]'));  // 0
console.log(frase.search('[oeE]'));  // 0

console.log();

console.log(frase.search('[oÉe]'));  // 3
