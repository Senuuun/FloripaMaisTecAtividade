const prompt = require('prompt-sync')();

let numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = prompt(`Digite o ${i+1}º número: `);
    numeros.push(Number(numero));
}

console.log("Números no array:");
for (let numero of numeros) {
    console.log(numero);
}