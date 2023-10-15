function calcular(){
    let nome = document.getElementById('inNome').value
    let sexF = document.getElementById('sexF').checked
    let sexM = document.getElementById('sexM').checked    
    let altura = Number(document.getElementById('inAltura').value)
    let resultado = document.querySelector('div#res')
    resultado.style.font = 'bold 15px arial'

    // Faz a validação dos dados e retorna para própria página aguardando um novo evento (novo clique no botão, por exemplo)
    if (nome == "" || (sexF == false && sexM == false) || altura <= 0){
        alert('Por favor, informe os dados necessários')
        return;
    }
    // Calcula o peso ideal para cada sexo
    if(sexF){
        let idealF = 21 * Math.pow(altura, 2)
        resultado.innerHTML = `${nome}: Seu peso ideal é ${idealF.toFixed(2)} kg`
    } else{
        let idealM = 22 * Math.pow(altura, 2)
        resultado.innerHTML = `${nome}: Seu peso ideal é ${idealM.toFixed(2)} kg`        
    }

}
let btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcular)

function limpar(){
    //reseta o formulário
    document.getElementById('form').reset()
}

let btLimpar = document.getElementById('btLimpar')
btLimpar.addEventListener('click', limpar)