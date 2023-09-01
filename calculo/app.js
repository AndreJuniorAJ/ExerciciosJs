let numberone = Number(prompt("Digite o primeiro valor"));
let numbertwo = Number(prompt("Digite o segundo valor"));

let valor = document.getElementById("titulo")

let resultado = numberone + numbertwo;

if(resultado >= 100) {
    valor.innerHTML = `Valor digitado é : ${resultado}`
} else {
    valor.innerHTML = `Valor não atingiu o numero correspondente`
};