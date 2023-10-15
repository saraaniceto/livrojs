function exibir(){
    let horaBrasil = document.getElementById('horaBrasil').value
    let horas = horaBrasil.substring(0,2)
    let minutos = horaBrasil.substring(3)

    if (horaBrasil == "" || isNaN(horas) || horas >=24 || isNaN(minutos) || minutos >= 60){
        alert('Digite a hora no formato correto')
        return
    }

    let horaFrança = Number(horas) + 5
    if (horaFrança >= 24 ){
        horaFrança -= 24
    }
    let resultado = document.querySelector('div#res')
    resultado.style.font = 'bold 20px arial'
    resultado.textContent = `Hora na França: ${horaFrança}:${minutos}`
}
let btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', exibir)