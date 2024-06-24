function calcular() {
    const res = document.querySelector('div.resultado');
    const nome = document.querySelector('input#nome');
    const idadeUser = document.querySelector('input#idade');
    const alturaUser = document.querySelector('input#altura');
    const pesoUser = document.querySelector('input#peso');

    const idade = Number(idadeUser.value);
    const altura = Number(alturaUser.value);
    const peso = Number(pesoUser.value);
    const imc = peso / (altura * altura);


    res.innerHTML = `
    <p>${nome}</p>
    <p>${idade} anos.</p>
    <p>Seu IMC é ${imc.toFixed(2)}</p>`
}