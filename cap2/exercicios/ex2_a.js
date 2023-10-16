function mostrarPromo(){
    let inMed = document.getElementById('inMed').value
    let inPreco = document.getElementById('inPreco').value
    let promo = Math.floor(inPreco * 2)
    let outPromo = document.querySelector('p#outPromo')
    outPromo.innerHTML = `Promoção de ${inMed}<br>Leve 2 por apenas R$${promo.toFixed(2)}`
}

let mostrar = document.getElementById('mostrar')
mostrar.addEventListener('click', mostrarPromo)