let numero1 = prompt("Digite primeiro número");
let numero2 = prompt("Digite segundo número");
let operacao = prompt("Qual operação deseja realizar? (Digite + ou - ou * ou /)");

let resultadoOperacao = realizarOperacao(numero1, numero2, operacao);
const informacao = document.getElementById("titulo");

function realizarOperacao(numero1, numero2, operacao) {
    let resultado = 0;

    resultado = eval(numero1 + operacao + numero2);

    return resultado;
};

informacao.innerHTML += resultadoOperacao;