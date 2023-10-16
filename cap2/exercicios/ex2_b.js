function calcularValor(){
    let inValor = document.getElementById('inValor').value
    let inTempo = document.getElementById('inTempo').value
    let total = Math.ceil(inTempo / 15) * inValor
    let res = document.querySelector('div#res')
    res.innerHTML = `Valor a Pagar: R$${total.toFixed(2)}`
}

let btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularValor)