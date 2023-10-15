// Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo. Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possam formar um triângulo, exiba também qual o tipo do triângulo. Equilátero (3 lados iguais), Isósceles (2 lados iguais) e Escaleno (3 lados diferentes).

function verificar(){
let ladoA = Number(document.getElementById('ladoA').value)
let ladoB = Number(document.getElementById('ladoB').value)
let ladoC = Number(document.getElementById('ladoC').value)
let lados = document.querySelector('p#lados')
let tipo = document.querySelector('p#tipo')

if (ladoA == 0 || isNaN(ladoA) || ladoB == 0 || isNaN(ladoB) || ladoC == 0 || isNaN(ladoC)){
    alert('Por favor insira todos os lados')
}

if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoB || ladoC > ladoA + ladoB){
    lados.textContent = 'Os lados não podem formar um triângulo'
} else {
    lados.textContent = 'Os lados podem formar um triângulo'
    if (ladoA == ladoB && ladoA == ladoC) {
        tipo.textContent = 'Tipo: Equilátero'
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        tipo.textContent = 'Tipo: Isósceles'
    } else{
        tipo.textContent = 'Tipo: Escaleno'
    }
}

}

let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificar)