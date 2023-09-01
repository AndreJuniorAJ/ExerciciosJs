let Fahrenheit = Number(prompt("digite um valor para calculo da temperatura em Fahrenheit"));

resultado = document.getElementById("valor");

cal = ((Fahrenheit - 32) *5) / 9; 


resultado.innerHTML += cal.toFixed();