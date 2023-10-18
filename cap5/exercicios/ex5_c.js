let candidatos = []

function add(){
    let inNome = document.getElementById('nome')
    let nome = inNome.value
    let inAcertos = document.getElementById('acertos')
    let acertos = +inAcertos.value

    if (nome == "" || isNaN(acertos)){
        alert('Insira os dados corretamente')        
        inNome.focus()
        return
    } else {
        candidatos.push({ nome: nome, acertos: acertos })
        inNome.value = ""
        inAcertos.value = ""
        inNome.focus()
    }

    list()    
}
let btAdd = document.getElementById('btAdd')
btAdd.addEventListener('click', add)

function list(){
    let inNome = document.getElementById('nome')
    if (candidatos.length == 0){
        alert('Não há candidatos registrados')
        inNome.focus()
        return
    } 
    
    let lista = ""
    for (let i=0; i < candidatos.length;i++){
        lista += `${candidatos[i].nome} - ${candidatos[i].acertos} acertos\n`
    }
    document.querySelector('pre#res').textContent = lista
}
let btList = document.getElementById('btList')
btList.addEventListener('click', list)

function approve(){
    var notaCorte = Number(prompt('Digite o nº de acertos para aprovação: '))
    while(notaCorte == 0 || isNaN(notaCorte)){    
        notaCorte = Number(prompt('Digite o nº de acertos para aprovação: '))   
    }

    let lista = ""
    let ordered = candidatos.slice()
    ordered.sort(function (a, b) { return a.acertos - b.acertos }).reverse()

    for (let i=0; i < ordered.length;i++){
        if (ordered[i].acertos >= notaCorte){
            lista += `${ordered[i].nome} - ${ordered[i].acertos} acertos\n`
        }
        document.querySelector('pre#res').textContent = lista
    }
}
let btApprove = document.getElementById('btApprove')
btApprove.addEventListener('click', approve)
