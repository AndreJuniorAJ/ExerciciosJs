
const resultado = document.getElementById("titulo");

for (let i = 0; i < 5; i++) {
    let position = prompt("Digite sua posição");

    if (position >= 0 && position <= 100) {
        alert("Continue o caminho está correto");
    } else {
        let random = Math.floor(Math.random() * (100 - 0) + 0);
        alert(`Ultrapassou o limite valor corrigido para ${random}`);
    };
};

