var itens = [];

//Exibe a lista de itens de acordo com a categoria selecionada
function trocarItem() {
  var inPizza = document.getElementById("inPizza");
  var inBebida = document.getElementById("inBebida");
  // Verifica qual item foi marcado e exibe a lista correspondente
  if (rbPizza.checked) {
    inBebida.className = "oculta";
    inPizza.className = "exibe";
  } else {
    inPizza.className = "oculta";
    inBebida.className = "exibe";
  }
}
//Associa o input radio ao evento change
var rbPizza = document.getElementById("rbPizza");
rbPizza.addEventListener("change", trocarItem);
var rbBebida = document.getElementById("rbBebida");
rbBebida.addEventListener("change", trocarItem);

//Mostra o número de sabores permitido em uma única pizza de acordo com o tamanho
function mostrarNumSabores() {
  if (rbPizza.checked) {
    var pizza = inPizza.value;
    var num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4;
    // Altera o placeholder do input
    inDetalhes.placeholder = `Até ${num} sabores`;
  }
}
//Mostra o placeholder apenas quando o elemento está focado
var inDetalhes = document.getElementById("inDetalhes");
inDetalhes.addEventListener("focus", mostrarNumSabores);
inDetalhes.addEventListener("blur", function () {
  inDetalhes.placeholder = "";
});

// Adiciona o item no pedido
function adicionarItem() {
  var inPizza = document.getElementById("inPizza");
  var inBebida = document.getElementById("inBebida");
  var outPedido = document.getElementById("outPedido");
  //Obtém o número do item selecionado na lista de opções e seu texto
  if (rbPizza.checked) {
    var num = inPizza.selectedIndex;
    var produto = inPizza.options[num].text;
  } else {
    var num = inBebida.selectedIndex;
    var produto = inBebida.options[num].text;
  }
  // Adiciona o produto ao vetor, exibe na tela e limpa o formulário
  var detalhes = inDetalhes.value;
  itens.push(`${produto} (${detalhes})`);
  outPedido.textContent = itens.join("\n");
  limparCampos();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarItem);
// Cria uma função para associar a função adicionarItem à tecla Enter
inDetalhes.addEventListener("keydown", function (tecla) {
  if (tecla.key == "Enter") {
    adicionarItem();
  }
});

//Limpa o formulário
function limparCampos() {
  rbPizza.checked = true;
  inBebida.className = "oculta";
  inPizza.className = "exibe";
  inPizza.selectedIndex = 0;
  inDetalhes.value = "";
  rbPizza.focus();
}
