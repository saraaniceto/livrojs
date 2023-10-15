// declara a função para mostrar o nome

function mostrarOla(){
    // lê o nome
    let nome = document.getElementById('nome')
    // exibe o nome no p#resposta
    document.getElementById('resposta').innerHTML = 'Olá, ' + nome.value + '!'
}
// puxa uma referência ao botão
let btMostrar = document.getElementById('mostrar')
// registra a função no evento
btMostrar.addEventListener('click', mostrarOla) // permite o registro de mais de uma função no mesmo evento


// mostrar.onclick = mostrarOla
//só permite o registro de uma função no mesmo evento