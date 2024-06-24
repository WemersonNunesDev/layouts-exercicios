//const bttnEnviar = document.getElementById('bttn-enviar');
const nome = document.getElementById('name')
const resultado = document.querySelector('div.resultado')

const listaNomes = [];

/*Nomes emlista for maior que zero ele mostrará os nomes
 */

/*
bttnEnviar.addEventListener("click", () => {
    resultado.innerHTML = `<p>${String(nome.value)}</p>`
})
*/

function criar() {
    const nomeString = String(nome.value);
    const newLista = listaNomes.push(nomeString)
    resultado.innerHTML = `<p>${newLista++}</p>`
}