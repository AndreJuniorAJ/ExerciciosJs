let numero1 = prompt("Insira o primeiro número: ");
let numero2 = prompt("Insira o segundo número: ");

let resultado = document.getElementById('resultado');

let resultadoDivisao = divide(numero1, numero2);

function divide(numero1, numero2) {
    let divisaoNumero = 0;

    divisaoNumero = numero1 / numero2;

    return divisaoNumero;
};

resultado.innerHTML += resultadoDivisao;