let servicos = []

function addServico() {
    let inVeiculo = document.getElementById('inVeiculo')
    let veiculo = inVeiculo.value

    if (veiculo == "") {
        alert('Adicione o serviço a ser executado')
        inVeiculo.focus()
        return
    }

    //Insere o serviço no vetor, concatena o vetor numa string e salva no navegador
    servicos.push(veiculo)
    let servicosPendentes = servicos.join(';')
    localStorage.setItem('listaServico', servicosPendentes)
    
    inVeiculo.value = ''
    inVeiculo.focus()
    mostrarServicos()
    
}
let btAdd = document.getElementById('btAdd')
btAdd.addEventListener('click', addServico)

function mostrarServicos() {
    let outPendentes = document.getElementById('outPendentes')
    outPendentes.textContent = `${servicos.length}`
    
}

function executar() {
    let outExecucao = document.getElementById('outExecucao')
    if(localStorage.getItem('listaServico')){        
        //Exibe o primeiro serviço adicionado
        outExecucao.textContent = `${servicos[0]}`
        //Remove o primeiro serviço do vetor, concatena e salva
        servicos.shift()        
        let servicosPendentes = servicos.join(';')
        localStorage.setItem('listaServico', servicosPendentes)
        inVeiculo.value = ''
        inVeiculo.focus()    
        mostrarServicos()    
    } else {
        outExecucao.textContent = ""
        alert('Não há serviços pendentes para executar')
        return
    }            
}
let btExe = document.getElementById('btExe')
btExe.addEventListener('click', executar)