function criptografar(){
    let inMsg = document.getElementById('inMsg')
    let msg = inMsg.value

    if (msg == "" | msg.length < 2){
        alert('Mensagem inválida.')
        inMsg.focus()
        return
    }

    let pares = ""
    let impares = ""
    for (let i = 0; i < msg.length; i++){
        if (i % 2 == 0){
            impares += msg.charAt(i)
        } else {
            pares += msg.charAt(i)
        }
    }
    document.querySelector('h3#res').textContent = `${pares}${impares}`
}
let btCript = document.getElementById('btCript')
btCript.addEventListener('click',criptografar)

function decriptografar(){
    let inMsg = document.getElementById('inMsg')
    let msgCript = document.querySelector('h3#res').textContent
    let len = msgCript.length
    if (len < 2){
        alert('Não há mensagem criptografada')
        inMsg.focus()
        return
    }
    
    let numPares = Math.floor(len / 2)
    let pares = msgCript.substring(0, numPares)
    let impares = msgCript.substring(numPares)
    let res = ""
    for (let i = 0; i < numPares + 1; i++){
        res += `${impares.charAt(i)}${pares.charAt(i)}`
    }
    document.querySelector('h3#res').textContent = `${res}`

}
let btDecript = document.getElementById('btDecript')
btDecript.addEventListener('click',decriptografar)

