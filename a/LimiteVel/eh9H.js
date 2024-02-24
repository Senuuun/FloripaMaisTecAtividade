/*
Desenvolva um programa em Javascript com duas variáveis: 
uma que armazene o limite de velocidade em km/h
outra que armazene a velocidade do automóvel registrada pelo sensor
Caso a velocidade esteja acima do permitido exiba a seguinte mensagem:
“Velocidade acima do permitido. O condutor poderá ser multado!”
*/

let velocidade = 60
let limite = 110

if (velocidade > limite) {
    console.log ("Velocidade acima do permitido. O condutor poderá ser multado!")
} else {
    console.log ("Ta de boas")
}
