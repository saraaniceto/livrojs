let cadastradas = []

function add(){
    let inNot = document.getElementById('noticia')
    let noticia = inNot.value
    
    if(noticia == ""){
        alert('Insira uma notícia')
        inNot.focus()
        return
    } else {
        cadastradas.push(noticia)
        inNot.value = ""
        inNot.focus()
    }
    
    if (cadastradas.length > 0){
        document.getElementById('nNoticias').textContent = cadastradas.length
    }
}
let btAdd = document.getElementById('btAdd')
btAdd.addEventListener('click', add)

function list(){
    let last = Number(prompt('Quantas notícias deseja exibir?'))

    if (last == 0 || isNaN(last) || last > cadastradas.length){
        alert('Número inválido')
        return
    }

    let lista = `${last} Últimas Notícias\n---------------------------\n`
    for(let i = 0; i < last;i++){
        lista += `${cadastradas.length - i}ª) ${cadastradas[cadastradas.length -1 - i]}\n`
    }
    document.querySelector('pre#last').textContent = lista
    
}
let btList = document.getElementById('btList')
btList.addEventListener('click', list)
