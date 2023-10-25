function verificar() {
    let inFrase = document.getElementById('inFrase')
    let frase = inFrase.value.toUpperCase()
    
    if (frase == "" || frase.indexOf(" ") == -1) {
        alert('Digite uma frase')
        inFrase.focus()
        return
    }
    
    let newFrase = frase.replace(/ /g, "")
    let reverse = ""
    for (let i = 0; i <= newFrase.length; i++){
        reverse += `${newFrase.charAt(newFrase.length - i)}`
    }

    let res = document.getElementById('res')
    if(reverse == newFrase) {
        res.textContent = `${frase} é um palíndromo`
    } else {
        res.textContent = `${frase} não é um palíndromo`
    }
    
}
let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificar)