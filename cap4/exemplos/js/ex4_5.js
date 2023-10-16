// Declara e inicializa o contador e o acumulador
let nContas = 0
let total = 0
// String que acumula as contas
let res = ""

function registrar(){
    let conta = document.getElementById('conta').value
    let valor = document.getElementById('valor').value
    let lista = document.getElementById('lista')
    let valorTotal = document.getElementById('valor-total')

    // Validação
    if (conta == "" || valor == 0 || isNaN(valor)){
        alert('Informe os dados corretamente')
        return
    }

    // Adiciona valores ao contador e ao acumulador
    nContas++
    total = total + parseFloat(valor)
    
    // Exibe a lista de contas
    res += `${conta} - R$${parseFloat(valor).toFixed(2)}\n`
    lista.textContent = res + '-------------------'

    // Exibe o valor total
    valorTotal.textContent = `${nContas} conta(s) - Total: R$${total.toFixed(2)}`
}