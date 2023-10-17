var erros = []
var sorteado = Math.floor(Math.random() * 100) + 1
const CHANCES = 6

function apostar() {
  var inNumero = document.getElementById('inNumero')
  var numero = Number(inNumero.value)
  var outDica = document.getElementById('outDica')
  var outErros = document.getElementById('outErros')
  var outChances = document.getElementById('outChances')

  // Validação
  if (numero <= 0 || numero > 100 || isNaN(numero)) {
    alert('Informe um número válido...')
    inNumero.focus()
    return
  }
  // Início das apostas
  if (numero == sorteado) {
    alert('Parabéns!! Você Acertou!!!')
    // Troca status dos botões
    btApostar.disabled = true
    btJogar.className = 'exibe'
    outDica.textContent = `Parabéns!! Número sorteado: ${sorteado}`
  } else {
    // Verifica se o número já foi apostado
    if (erros.indexOf(numero) >= 0) {
      alert(`Você já apostou o número ${numero}. Tente outro...`)
    } else {        
      erros.push(numero)
      //Exibe erros e chances
      var numErros = erros.length
      var numChances = CHANCES - numErros      
      outErros.textContent = `${numErros} (${erros.join(', ')})`
      outChances.textContent = numChances
      // Verifica se as chances acabaram, caso contrário exibe as dicas      
      if (numChances == 0) {
        alert('Suas chances acabaram...')
        btApostar.disabled = true
        btJogar.className = 'exibe'
        outDica.textContent = `Game Over!! Número Sorteado: ${sorteado}`
      } else {
        var dica = numero < sorteado ? 'maior' : 'menor'
        outDica.textContent = `Dica: Tente um número ${dica} que ${numero}`
      }
    }
  }
  // Limpa campo de entrada e posiciona cursor neste campo
  inNumero.value = ''
  inNumero.focus()
}
var btApostar = document.getElementById('btApostar')
btApostar.addEventListener('click', apostar)

function jogarNovamente() {
    location.reload()
}
var btJogar = document.getElementById("btJogar")
btJogar.addEventListener("click", jogarNovamente)
    