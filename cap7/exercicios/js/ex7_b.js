function gerarSenha(){
    let inAluno = document.getElementById('inAluno')
    let aluno = inAluno.value
    let senha = document.querySelector('h3#senha')

    if (!validarNome(aluno) || aluno == ''){
        alert ('Digite o nome completo')
        inAluno.focus()
        return
    }
    senha.textContent = `Senha Inicial: ${obterSobrenome(aluno)}${contarVogais(aluno)}`
}
let btSenha = document.getElementById('btSenha')
btSenha.addEventListener('click', gerarSenha)

function validarNome(nome){
    if (nome.indexOf(' ') >= -1){
        return true
    } else {
        return false
    }
}

function obterSobrenome(nome){
    let partes = nome.toLowerCase().split(' ')
    return partes[partes.length - 1]
}

function contarVogais(nome){
    let vogais = nome.toLowerCase().match(/[aeiou]/g)
    if (vogais.length > 10) {
        return vogais.length
    } else {
        return `0${vogais.length}`
    }
}


