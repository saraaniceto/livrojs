function calcular(){
    let inData = document.getElementById('inData')
    let data = inData.value
    let inValor = document.getElementById('inValor')
    let valor = inValor.value
    console.log(data)

    //Pega a data do input
    let aux = data.split("-")
    let newData = new Date()
    newData.setDate(aux[2])
    newData.setMonth(aux[1] - 1) // Transforma o número do mês para o index do mês
    newData.setFullYear(aux[0])

    //Encontra a data de venciomento
    newData.setDate(newData.getDate() + 90)
    console.log(newData)
    let dia = newData.getDate()
    let mes = newData.getMonth() + 1 // Transforma o index do mês para o número do mês
    let ano = newData.getFullYear()

    //Valor com desconto de 20%
    let valorDesconto = valor * 0.8

    //Imprime a data
    document.querySelector('h3#data_limite').textContent = 'Data limite para pagamento com desconto: ' + (dia < 10? '0' + dia : dia) + '/' + (mes < 10 ? '0' + mes : mes) + '/' + ano
    //Imprime o valor
    document.querySelector('h3#valor_final').textContent = `Valor com desconto: R$${valorDesconto.toFixed(2)}`
}
let btCalc = document.getElementById('btCalc')
btCalc.addEventListener('click',calcular)