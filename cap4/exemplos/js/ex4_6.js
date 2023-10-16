function verificar(){
    let num = document.getElementById('num').value
    let res = document.getElementById('res')

    if (num == 0 || isNaN(num)){
        alert('Número inválido!')
        return
    }

    let numDiv = 0
    //(num / 2) -> O maior divisor inteiro de um número é a sua metade 
    for (let i = 2; i <= num / 2; i++){
        if (num % i == 0){
            numDiv++
            break //Criando um break economiza processamento ao evitar que o programa realize todas as divisões
        }
    }

    if (num > 1 && !numDiv) {
        res.textContent = `${num}: é Primo`
    } else {
        res.textContent = `${num}: Não é Primo.`
    }
}

let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificar)