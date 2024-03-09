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

const soma = numeros.reduce((Acumulador, NumeroAtual) => {
    return Acumulador + NumeroAtual
}, 0)

console.log("A soma dos numeros é ", soma)

const numerosOrdenados = [...numeros]
numerosOrdenados.sort((numero1, numero2) => numero1 - numero2)
console.log(`A lista de numeros ordenados é ", ${numerosOrdenados.join(" ")}`)

const SoPARES = numeros.filter(NumeroAtual => {
    if (NumeroAtual % 2 == 0){
        return true
    }
})
console.log("O novo array com numeros pares é ", SoPARES)

const quadrados = numeros.map(NumeroAtual => NumeroAtual * NumeroAtual)
console.log("O array dos quadrados do numeros é ", quadrados)