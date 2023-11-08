let servicos = []
function addServico() {
    let inVeiculo = document.getElementById('inVeiculo')
    let veiculo = inVeiculo.value

    if (veiculo == "") {
        alert('Adicione o serviço a ser executado')
        inVeiculo.focus()
        return
    }

    servicos.push(veiculo)
    let servicosPendentes = servicos.join(';')
    localStorage.setItem('listaServico', servicosPendentes)
    mostrarServicos()
}
let btAdd = document.getElementById('btAdd')
btAdd.addEventListener('click', addServico)

function mostrarServicos() {
    let outPendentes = document.getElementById('outPendentes')
    outPendentes.textContent = 
}

function executar() {
    if(localStorage.getItem('listaServico')){
        servicos = localStorage.getItem('listaServico').split(';')
        let servicoExecucao = servicos[0]
        contador = servicos.length - 1
    }
        
}
let btExe = document.getElementById('btExe')
btExe.addEventListener('click', executar)