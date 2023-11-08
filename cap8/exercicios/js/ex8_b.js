let produtos = []
function addItem() {
    let inProduto = document.getElementById('inProduto')
    let produto = inProduto.value
    //Validação
    if (produto == "") {
        alert('Informe o produto a ser adicionado')
        inProduto.focus()
        return
    }
    //Salva os produtos
    let produtoAdicionado = produto
    if (localStorage.getItem('listaCompras')) {
        produtoAdicionado += `;${localStorage.getItem('listaCompras')}`
        localStorage.setItem('listaCompras', produtoAdicionado)
    } else {        
        localStorage.setItem('listaCompras', produtoAdicionado)
    }
    inProduto.value = ''
    inProduto.focus()
    showList()
}
let btAdd = document.getElementById('btAdd')
btAdd.addEventListener('click', addItem)
btAdd.addEventListener("keydown", function (tecla) {
    if (tecla.key == "Enter") {
      addItem();
    }
  });

function showList(){
    let outLista = document.getElementById('outLista')
    outLista.textContent = ''
    if (localStorage.getItem('listaCompras')) {
        produtos = localStorage.getItem('listaCompras').split(';').sort()
        outLista.textContent = 'Produtos Adicionados'
        outLista.textContent += `\n -------------------------`
        for (let i = 0; i < produtos.length; i++) {
            outLista.textContent += `\n${produtos[i]}`
        }
    }    
}

function emptyList() {
    let inProduto = document.getElementById('inProduto')
    if(confirm('Deseja limpar a lista de compras?')){
    localStorage.removeItem('listaCompras')
    inProduto.value = ''
    inProduto.focus()
    showList()
    }
}
let btClean = document.getElementById('btClean')
btClean.addEventListener('click', emptyList)
