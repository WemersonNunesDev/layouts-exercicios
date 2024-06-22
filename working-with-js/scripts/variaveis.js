let resultado = document.querySelector('div.resultado')
let res_legenda = document.querySelector('div.res_legenda')

var nome = "Wemerson";

let letName = "Alice";

const consName = 'Marcos';

const thiago = {
    nome: "Thiago",
    idade: 24,
    gay: true,
};

function criarNomes() {
    resultado.innerHTML = `
    <ul>
        <li>${nome}
        <li>${letName}
        <li>${consName}
    </ul>
`
}

criarNomes();