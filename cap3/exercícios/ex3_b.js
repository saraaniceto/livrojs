//Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave”

function verificar(){
    let vPermitida = parseInt(document.getElementById('vPermitida').value)
    let vCondutor = parseInt(document.getElementById('vCondutor').value)
    let resultado = document.querySelector('div#res')

    if ( vCondutor <= vPermitida ){
        resultado.textContent = `Situação: Sem Multa`
    } else if ( vCondutor <= vPermitida * 1.2 ){
        resultado.textContent = `Situação: Multa Leve`
    } else {
        resultado.textContent = `Situação: Multa Grave`
    }
}

let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificar)