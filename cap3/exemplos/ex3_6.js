//Falta corrigir para que cada vez que clicar no botão a mensagem seja resetada
function saque(){
    let inSaque = document.getElementById('inSaque').value
    let saque = Number(inSaque)
    let out100 = document.getElementById('out100')
    let out50 = document.getElementById('out50')
    let out10 = document.getElementById('out10')
    
    if (saque <= 0 || saque % 10 !== 0){
        alert('Não disponível para saque, digite outro valor.')
        return
    }
        
    let num100 = Math.floor(saque / 100)
    let rest = saque % 100
    let num50 = Math.floor(rest / 50)
    rest = rest % 50
    let num10 = Math.floor(rest / 10)
    
    
    if (num100 > 0){
        out100.textContent = `Notas de R$100: ${num100}`
    }
    if (num50 > 0){
        out50.textContent = `Notas de R$50: ${num50}`
    }
    if (num10 > 0){
        out10.textContent = `Notas de R$10: ${num10}`
    }    
    
}

let btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', saque)
