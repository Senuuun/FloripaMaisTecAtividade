const prompt = require('prompt-sync')();

const frutas = ["maçã", "banana", "abacate"];

for (let i = 0; i < 3; i++) {
    const fruta = prompt(`Digite a ${i+1}ª fruta: `);
    frutas.push(fruta);
}

console.log("Segunda fruta:", frutas[1]);