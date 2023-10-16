function verPromo(){
    let inProduto = document.getElementById('inProduto').value
    let inPreco = document.getElementById('inPreco').value
    // Calcular promoção
    let precoProduto3 = inPreco / 2
    let precoTotal = (inPreco * 2) + precoProduto3
    // Exibir promoção
    let res = document.querySelector('div#res')
    res.innerHTML = `${inProduto} - Promoção: Leve 3 por R$${precoTotal.toFixed(2)}<br>O 3º produto custa apenas R$${precoProduto3.toFixed(2)}`
}

let btPromo = document.getElementById('btPromo')
btPromo.addEventListener('click', verPromo)