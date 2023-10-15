function verPromocao() {
// Recebe os inputs
let inVeiculo = document.getElementById('inVeiculo').value
let inPreco = document.getElementById('inPreco').value
// Calcula a promoção
let entrada = inPreco / 2
let parcela = entrada / 12
// Exibe o resultado
let outVeiculo = document.getElementById('outVeiculo')
outVeiculo.innerHTML = `<strong>Promoção: ${inVeiculo} </strong>`
let outResultado = document.getElementById('outResultado')
outResultado.innerHTML = `<strong> Entrada de R$${entrada.toFixed(2)}\n+ 12x de R$${parcela.toFixed(2)}`
}

let btPromocao = document.getElementById('btPromocao')
btPromocao.addEventListener('click', verPromocao)