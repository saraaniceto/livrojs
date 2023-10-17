let numeros = []

function add(){
    let inNum = document.getElementById('inNum')
    let num = inNum.value
    
    if(num == "" || isNaN(num)){
        alert('Insira um número')
        inNum.focus()
        return
    } else if (numeros.indexOf(num) >= 0) {
        alert('O número já foi adicionado')
        inNum.focus()
        return
    } else {
        numeros.push(num)
        inNum.value = ""
        inNum.focus()        
        let lista = 'Números: '
        lista += `${numeros.join(', ')}`
        document.querySelector('h3#lista').textContent = lista
    }     
}
let btAdd = document.getElementById('btAdd')
btAdd.addEventListener('click', add)

function order(){
    ordenados = numeros.slice().sort(function (a,b){
        return a - b
    })
    
    let ordem = ""
    if(ordenados.toString() == numeros.toString()){
        ordem += `Os números estão em ordem crescente`    
    } else {
        ordem += `Atenção os números não estão em ordem crescente`
    }
    document.querySelector('pre#res').textContent = ordem
}
let btOrder = document.getElementById('btOrder')
btOrder.addEventListener('click', order)
