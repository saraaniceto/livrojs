//Elaborar um programa que leia um número. Informe se ele é par ou ímpar

function verificar(){
    let num = parseInt(document.getElementById('inNum').value)
    let resultado = document.querySelector('div#res')

    if ( num % 2 == 0 ){
        resultado.textContent = `O número ${num} é par.`
    } else {
        resultado.textContent = `O número ${num} é ímpar.`
    }
}

let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificar)
