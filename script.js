const numero1 = document.querySelector('input.numero1');
const numero2 = document.querySelector('input.numero2');
const bttnSomar = document.querySelector('input#btn');
const resultado = document.querySelector('div.resultado');

bttnSomar.addEventListener('click', () => {
    let n1 = Number(numero1.value);
    let n2 = Number(numero2.value);

    const soma = n1 + n2;

    resultado.innerHTML = `A soma dos números é ${soma}`
})