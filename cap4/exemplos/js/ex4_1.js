function tabuada(){
    let inNum = Number(document.getElementById('inNum').value)
    let output = document.getElementById('res')
    output.innerHTML = "" //Faz o output resetar toda vez que a função é acionada pelo botão
    
    if (inNum == 0 || isNaN(inNum)){
        alert('Informe um número válido')
        return
    }
    
    for (i = 0; i <= 10; i++){
        let res = output.innerHTML
        let tab = `${inNum} x ${i} = ${inNum * i}`
        output.innerHTML = `${res += tab}\n`
    }
}

var btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', tabuada)