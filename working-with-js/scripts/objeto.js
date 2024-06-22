let resultado = document.querySelector('div.resultado');

const pessoa = {
    nome: "Wemerson",
    idade: 23,
    altura: 1.90,
    peso: 100,
}

/*
Aqui talvez fosse melhor se usar pug, handlebars ou ejs seria melhor 
*/

dadosMaisIMC();

function dadosMaisIMC() {
    let imc = pessoa.peso / (pessoa.altura * pessoa.altura);

    resultado.innerHTML = `
    <h2>ID CARD</h2>
    <hr>
    <p>Nome: ${pessoa.nome}</p>
    <p>Idade: ${pessoa.idade}</p>
    `

    if (imc > 18.5 && imc < 25) {
        resultado.innerHTML += `
    <p>O seu IMC é ${imc.toFixed(2)}. <strong>Normal</strong>.</p>
    `
    } else if (imc < 16.5) {
        resultado.innerHTML += `
    <p>O seu IMC é ${imc.toFixed(2)}. Subpeso.</p>
    `
    } else if (imc > 25) {
        resultado.innerHTML += `
    <p>O seu IMC é ${imc.toFixed(2)}. <strong>Sobrepeso.</strong></p>
    `
    }
}
