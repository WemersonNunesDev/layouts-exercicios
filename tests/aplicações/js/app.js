const tituloProduto = document.querySelector('.inp-titulo');
const precoProduto = document.querySelector('.inp-preco');
const btnEnviar = document.querySelector('.btn-enviar');
const tabela = document.querySelector('.tabela-estoque');

function linha() {
    const tr = document.createElement('tr');
    return tr;
}

function coluna() {
    const td = document.createElement('td');
    return td;
}

btnEnviar.addEventListener('click', () => {
    if(!tituloProduto.value && !precoProduto.value) return;
    
    postItem(tituloProduto.value, precoProduto.value);
});

function postItem(textProduto, textPreco) {
    const tr = linha();
    const td1 = coluna();
    const td2 = coluna();
    td1.innerText = textProduto;
    td2.innerText = `R$${textPreco}`;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabela.appendChild(tr);
    
    clearInput();
    saveProduto();
}

function clearInput() {
    tituloProduto.value = '';
    precoProduto.value = '';
}

function saveProduto() {
    const listaProdutos = tabela.querySelectorAll('tr');
    const todosProdutos = [];

    for (let produto of listaProdutos) {
        let valorProduto = produto.innerText;
        todosProdutos.push(valorProduto);
    }

    const produtoJSON = JSON.stringify(todosProdutos);
    localStorage.setItem('produtos', produtoJSON);
    console.log(produtoJSON);
}

function addSavedProduto() {
    const produtos = localStorage.getItem('produtos');
    const listaDeProdutos = JSON.parse(produtos);
    // console.log(listaDeTarefas);

    for (let produto of listaDeProdutos) {
        postTarefa(produto);
    }
}

addSavedProduto();
