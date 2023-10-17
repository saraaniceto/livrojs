let criancas = [];

function addChild() {
  let inNome = document.getElementById("inNome");
  let inIdade = document.getElementById("inIdade");
  let nome = inNome.value;
  let idade = Number(inIdade.value);

  //Validação
  if (nome == "" || inIdade.value == "" || isNaN(idade)) {
    alert("Informe corretamente os dados");
    inNome.focus();
    return;
  }

  // Adiciona dados ao vetor de objetos
  criancas.push({ nome: nome, idade: idade });

  inNome.value = "";
  inIdade.value = "";
  inNome.focus();
  listarCriancas(); //Chama function que lista todas as crianças
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", addChild);

function listarCriancas() {
  if (criancas.length == 0) {
    alert("Não há crianças na lista");
    return;
  }
  var lista = "";
  // Exibe a lista de crianças
  for (var i = 0; i < criancas.length; i++) {
    lista += `${criancas[i].nome} - ${criancas[i].idade} anos\n`;
  }
  document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCriancas);

function resumirLista() {
  if (criancas.length == 0) {
    alert("Não há crianças na lista");
    return;
  }
  //Ordena a lista por idade
  var copia = criancas.slice();
  copia.sort(function (a, b) {
    return a.idade - b.idade;
  });

  var resumo = ""; // Para concatenar saída

  // Define a menor idade e agrupa as crianças por idade
  var menorIdade = copia[0].idade;
  var nomes = [];
  for (var i = 0; i < copia.length; i++) {
    if (copia[i].idade == menorIdade) {
      nomes.push(copia[i].nome);
    } else {
      //Faz o resumo do grupo da menor idade atual
      resumo += `${menorIdade} ano(s): ${nomes.length} criança(s) - `;
      resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`;
      resumo += `(${nomes.join(", ")})\n\n`;
      menorIdade = copia[i].idade; //Obtém a próxima menor idade
      nomes = []; //Limpa o vetor dos nomes
      nomes.push(copia[i].nome); //Adiciona o primeiro da nova idade
    }
  }
  //Faz o resumo do último grupo de idade
  resumo += `${menorIdade} ano(s): ${nomes.length} criança(s) - `;
  resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`;
  resumo += `(${nomes.join(", ")})\n\n`;
  //Exibe todos os resumos
  document.getElementById("outLista").textContent = resumo;
}
var btResumir = document.getElementById("btResumir");
btResumir.addEventListener("click", resumirLista);
