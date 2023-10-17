let carros = [];

function addCar() {
  let inModelo = document.getElementById("inModelo");
  let inPreco = document.getElementById("inPreco");
  let modelo = inModelo.value;
  let preco = Number(inPreco.value);
  // Validação
  if (modelo == "" || preco == 0 || isNaN(preco)) {
    alert("Informe corretamente os dados");
    inModelo.focus();
    return;
  }
  // Adiciona dados ao vetor de objetos
  carros.push({ modelo: modelo, preco: preco });
  // Limpa campos e reposiciona cursor
  inModelo.value = "";
  inPreco.value = "";
  inModelo.focus();
  listCars(); //Chama function que lista todos os carros
}
let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", addCar);

function listCars() {
  // Verifica se vetor está vazio
  if (carros.length == 0) {
    alert("Não há carros na lista");
    return;
  }
  // Adicionar os objetos à lista
  let lista = "";
  for (let i = 0; i < carros.length; i++) {
    lista += `${carros[i].modelo} - R$:${carros[i].preco.toFixed(2)}\n`;
  }
  // Exibe a lista
  document.getElementById("outLista").textContent = lista;
}
let btListar = document.getElementById("btListar");
btListar.addEventListener("click", listCars);

function filtrarCarros() {
  let maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));
  // Validação
  if (maximo == 0 || isNaN(maximo)) {
    return;
  }

  //Procura os carros e adiciona na lista
  let lista = "";
  for (let i = 0; i < carros.length; i++) {
    if (carros[i].preco <= maximo) {
      lista += `${carros[i].modelo} - R$${carros[i].preco.toFixed(2)}\n`;
    }
  }
  
  //Exibe a lista de carros filtrados
  let outLista = document.getElementById("outLista");
  if (lista == "") {
    outLista.textContent = `Não há carros com preço até R$${maximo.toFixed(2)}`;
  } else {
    outLista.textContent = `Carros até R$${maximo.toFixed(2)}\n------------------------\n${lista}`;
  }
}
var btFiltrar = document.getElementById("btFiltrar");
btFiltrar.addEventListener("click", filtrarCarros);
