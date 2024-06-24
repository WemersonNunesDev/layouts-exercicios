const res = document.querySelector('div.resultado');
const nomeUser = document.getElementById('nome');
const idadeUser = document.getElementById('idade');
const alturaUser = document.getElementById('altura');
const pesoUser = document.getElementById('peso');


const nome = String(nomeUser.value);
const idade = Number(idadeUser.value);
const altura = Number(alturaUser.value);
const peso = Number(pesoUser.value);
const imc = Number(peso / (altura * altura)).toFixed(2);

function calcular() {
    res.innerHTML = `<p>
    Nome: ${nome}
    Idade: ${idade} anos
    IMC: ${imc}
    </p>`
}
