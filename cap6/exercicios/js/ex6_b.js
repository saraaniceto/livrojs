function gerarCitacao(){
    let inAut = document.getElementById('inAut')
    let autor = inAut.value

    if(autor == "" || autor.indexOf(" ") == -1) {
        alert('Digite o nome completo do autor.')
        inAut.focus()
        return
    }

    let partes = autor.toUpperCase().split(" ")

    let last = partes[partes.length - 1]
    let ref = `${last},`
    for (let i = 0; i < partes.length - 1; i++) {
        ref += ` ${partes[i].charAt(0)}.`
    }
    document.getElementById('res').textContent = `Citação Bibliográfica: ${ref}`

}
let btGerar = document.getElementById('btGerar')
btGerar.addEventListener('click', gerarCitacao)