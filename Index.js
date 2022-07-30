//Importações do projeto
let prompt = require('prompt-sync')();

function calculadora(a, b, c) {
    switch (c) {
        case 1:
            return a + b;
            break;
        case 2:
            return a - b;
            break;
        case 3:
            return a * b;
            break;
        case 4:
            return a / b;
            break;
        default:
            return 0;

    }

}

let op;

while (op != 0) {
    console.log("*****------------------------------*****")
    console.log("*|          Menu Calculadora          |*")
    console.log("*--------------------------------------*")
    console.log("* 1. Soma                              *")
    console.log("* 2. Subtração                         *")
    console.log("* 3. Multiplicação                     *")
    console.log("* 4. Divisão                           *")
    console.log("* 0. Sair da calculadora               *")
    console.log("*****------------------------------*****")


    op = parseInt(prompt("Digite a opção desejada (Utilize apenas números): "))
    if (op === 0) {
        console.log("Saindo da Calculadora...")
        break;
    }

    if (op === 1 || op === 2 || op === 3 || op === 4) {
        let valor1 = parseFloat(prompt("Digite o primeiro valor: "))
        let valor2 = parseFloat(prompt("Digite o segundo valor: "))
        let result = calculadora(valor1, valor2, op)
        console.log(`O resultado da sua opreção é: ${result}`)
    } else {
        console.log("")
        console.log("")
        console.log("Opção invalida, escolha outra opção:")
    }

}