function exibir(){
    let nome = document.getElementById('inNome').value
    let nota1 = document.getElementById('inNota1').value
    let nota2 = document.getElementById('inNota2').value
    let media = (Number(nota1) + Number(nota2)) / 2
    let outMedia = document.querySelector('p#outMedia')
    outMedia.textContent = 'Média das Notas: ' + media.toFixed(1)
    let outSituacao = document.querySelector('p#outSituacao')
    if (media >=7 ){
        outSituacao.style.color = 'blue'
        outSituacao.textContent = `Parabéns ${nome}! Você foi aprovado(a).`
    } else if (media >=4){
        outSituacao.style.color = 'green'
        outSituacao.textContent = `Atenção ${nome}. Você etá em recuperação.`
    }else {
        outSituacao.style.color = 'red'
        outSituacao.textContent = `Ops ${nome}. Você foi reprovado(a)`
    }
}

let btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', exibir)
