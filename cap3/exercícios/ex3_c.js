// Elaborar um programa para simular um parquímetro, o qual leia o valor de moedas depositado em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo no local e o troco (se existir). Se o valor for inferior ao tempo mínimo, exiba a mensagem: “Valor Insuficiente"

function confirmar(){
    // Declaração
    let valor = parseFloat(document.getElementById('valor').value)
    let resultado = document.querySelector('div#res')
    let tempo
    let troco

    // Validação
    if (valor == 0 || isNaN(valor)){
        alert('Informe um valor válido.')
        valor.focus()
        return
    }

    if (valor < 1) {
        alert('Saldo insuficiente.\n Valor mínimo: R$1,00')
        return
    }

    // Define o tempo e o troco
   if (valor <= 30){
    tempo = 3
    troco = valor - 1
   } else if (valor <= 60){
    tempo = 60
    troco = valor - 1.75
   } else {
    tempo = 120
    valor = valor - 3
  }

  // Apresenta as mensagens
  if (troco > 0 ){
      resultado.textContent = `Tempo: ${tempo} min
      Troco: R$${troco.toFixed(2)}`
  } else {
    resultado.textContent = `Tempo: ${tempo} min`
  } 
}

let btConfirmar = document.getElementById('btConfirmar')
btConfirmar.addEventListener('click', confirmar)