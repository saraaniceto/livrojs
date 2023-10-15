function raiz(){
    let inNumero = document.getElementById('inNumero').value
    let outResposta = document.querySelector('div#outResposta')  
    let raizQuadrada = Math.sqrt(Number(inNumero))
    // Poderia fazer a validação com if(raizQuadrada == Math.floor(raizQuadrada))
    if (Number.isInteger(raizQuadrada)){
        outResposta.textContent = `A raíz quadrada de ${inNumero} é ${raizQuadrada}`
    } else {
        outResposta.textContent = `Não há raíz exata para ${inNumero}`
    } 
}
let btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', raiz)