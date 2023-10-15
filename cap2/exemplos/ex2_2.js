function converter(){
// Recebe os inputs
let inTitulo = document.getElementById('filmeTitulo')
let inDuracao = document.getElementById('filmeDuracao')
// Realiza a conversão
let resultadoHoras = Math.floor((inDuracao.value) / 60)
let resultadoMin = inDuracao.value % 60
// Exibe os resultados
let outTitulo = document.getElementById('outTitulo')
outTitulo.innerHTML = inTitulo.value
let outResultado = document.getElementById('outResultado')
outResultado.innerHTML = resultadoHoras + ' hora(s) e ' + resultadoMin + ' minuto(s)'
}


let btConverter = document.getElementById('btConverter')
btConverter.addEventListener('click', converter)