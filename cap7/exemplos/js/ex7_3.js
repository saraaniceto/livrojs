function mostrarDados() {
  var inModelo = document.getElementById("inModelo");
  var modelo = inModelo.value;

  var inAno = document.getElementById("inAno");
  var ano = Number(inAno.value);

  var inPreco = document.getElementById("inPreco");
  var preco = Number(inPreco.value);

  var outClassif = document.getElementById("outClassif");
  var outPrecoVenda = document.getElementById("outPrecoVenda");

  // Validação
  if (modelo == "" || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)) {
    alert("Informe corretamente os dados do veículo");
    inModelo.focus();
    return;
  }

/* Chama as funções e atribui o retorno às variáveis -> Nesse caso a função está sendo hoisted(usada antes de ser declarada) */
  var classificacao = classificarVeiculo(ano);
  var precoVenda = calcularVenda(preco, classificacao);

  // Exibe as respostas
  outClassif.textContent = `${modelo} - ${classificacao}`;
  outPrecoVenda.textContent = `Preço de Venda R$: ${precoVenda.toFixed(2)}`;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarDados);

function classificarVeiculo(year) {
  var anoAtual = new Date().getFullYear();
  var classif;
  if (year == anoAtual) {
    classif = "Novo";
  } else if (year == anoAtual - 1 || year == anoAtual - 2) {
    classif = "Seminovo";
  } else {
    classif = "Usado";
  }
  return classif;
}

function calcularVenda(valor, status) {
  var prVenda = status == "Novo" ? valor * 1.08 : valor * 1.1;
  return prVenda;
}