const dano = prompt("Escolha um valor de 1 a 10 para o valor do seu dano");

const saude = Math.floor(Math.random() * (10 - 1) + 0);
const resultado = document.getElementById("titulo");

if (dano > saude){
    resultado.innerHTML = `Seu personagem morreu com esse dano ${dano}`;
} else if (dano < saude) {
    resultado.innerHTML = `Tente novamente digite f5`
}

