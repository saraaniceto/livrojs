function calcularDesconto(){
    let inValor = document.getElementById('inValor')
    let valorVacina = Number(inValor.value)
    let inConvenio = document.getElementById('inConvenio')
    let convenio = inConvenio.value  

    if(valorVacina == 0 | isNaN(valorVacina)){
        alert('Digite o valor da vacina')
        inValor.focus()
        return
    }

    let valorDesconto = desconto(valorVacina,convenio)
    document.querySelector('h3#desconto').textContent = `Desconto: R$${valorDesconto}`
    document.querySelector('h3#pagar').textContent = `A Pagar: R$${(valorVacina - valorDesconto).toFixed(2)}`
}
let btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularDesconto)

function exibirConvenio(){
    let inConvenio = document.getElementById('inConvenio')
    if (sim.checked){
        inConvenio.className = "exibe"
    } else {
        inConvenio.className = "oculta"
        inConvenio.value = ""
    }
}
let temConvenio = document.getElementById('sim')
temConvenio.addEventListener('change', exibirConvenio)
let semConvenio = document.getElementById('nao')
semConvenio.addEventListener('change', exibirConvenio)

function desconto(valor,convenio){
    let taxa  
    switch (convenio){
        case 'amigo':
            taxa = 0.2
            break
        case 'saude':
            taxa = 0.5
            break
        default:
            taxa = 0.1
    }
    return (valor * taxa).toFixed(2)
}
