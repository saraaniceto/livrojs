function calcularPreco(){
// Recebe os inputs
let precoQuilo = document.getElementById('precoQuilo').value
let pesoCliente = document.getElementById('pesoCliente').value
// Calcula o preço
let pesoQuilo = pesoCliente / 1000
let precoTotal = precoQuilo * pesoQuilo
// Exibe o preço
let resultado = document.querySelector('p#resultado')
resultado.innerHTML = `<strong>Valor a pagar R$${precoTotal.toFixed(2)}</strong>`
}

let btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularPreco)