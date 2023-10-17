let clubes = []

function add(){
    let inClube = document.getElementById('inClube')
    let clube = inClube.value

    if (clube == "") {
        alert('Insira um clube')
        inClube.focus()
        return
    } else if (clubes.indexOf(clube) >= 0) {
        alert('O clube já está na lista, insira outro')
        inClube.focus()
        return
    } else {
        clubes.push(clube)
        inClube.value = ""
        inClube.focus()
        list()
    }
}
let btAdd = document.getElementById('btAdd')
btAdd.addEventListener('click', add)

function list(){
    if (clubes.length == 0) {
        alert('Não há nenhum time na lista')
        inClube.focus()
        return
    }

    let lista = ""
    for (let i = 0; i < clubes.length; i++) {
        lista += `${i+1} - ${clubes[i]}\n`
    }
    document.querySelector('pre#listClubes').textContent = lista
}
let btList = document.getElementById('btList')
btList.addEventListener('click', list)

function table(){
    if (clubes.length % 2 != 0) {
        alert('O número de clubes é ímpar, adicione pelo menos mais um clube')
        inClube.focus()
        return
    }

    let tabela = ""
    for (let i = 0; i < clubes.length / 2; i++){
        tabela += `${clubes[i]} x ${clubes[clubes.length - 1 - i]}\n`        
    }
    document.querySelector('pre#listClubes').textContent = tabela
}
let btTable = document.getElementById('btTable')
btTable.addEventListener('click', table)
