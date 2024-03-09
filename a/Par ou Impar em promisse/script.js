function verificarPar(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve("Número validado é par");
        } else {
            reject("Error: número informado é ímpar");
        }
    });
}

let onumero = 2;

verificarPar(onumero)
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((erro) => {
        console.error(erro);
    });