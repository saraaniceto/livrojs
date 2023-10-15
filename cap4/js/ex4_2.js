function descrescer(){
    let num = Number(document.getElementById('inNum').value)
    let output = document.getElementById('res')
    output.innerHTML = ""

    if (num == 0 || isNaN(num)){
        alert('Digite um número válido')
        return
    }

    var res = `Entre ${num} e 1: `
    
    for (var i = num; i > 1; i--){
      res += `${i}, `        
    }
    res += `${i}`
    output.innerHTML = res
}

let btDecr = document.getElementById('btDecr')
btDecr.addEventListener('click', descrescer)