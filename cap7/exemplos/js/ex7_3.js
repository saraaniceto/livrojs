function mostrarDados() {
  // Cria referência aos elementos da página
  var inModelo = document.getElementById("inModelo");
  var inAno = document.getElementById("inAno");
  var inPreco = document.getElementById("inPreco");
  var outClassif = document.getElementById("outClassif");
  var outPrecoVenda = document.getElementById("outPrecoVenda");
  // Obtém o conteúdo dos campos de entrada de dados
  var modelo = inModelo.value;
  var ano = Number(inAno.value);
  var preco = Number(inPreco.value);
  // Validação
  if (modelo == "" || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)) {
    alert("Informe corretamente os dados do veículo");
    inModelo.focus();
    return;
  }
  // Chama as funções e atribui o retorno às variáveis
  var classificacao = classificarVeiculo(ano);
  var precoVenda = calcularVenda(preco, classificacao);
  // exibe as respostas
  outClassif.textContent = modelo + " - " + classificacao;
  outPrecoVenda.textContent = "Preço de Venda R$: " + precoVenda.toFixed(2);
}
// cria referência ao botão e associa ao evento click a função
mostrarDados;
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarDados);
