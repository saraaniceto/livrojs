function incluirAposta() {
  let inNome = document.getElementById("inNome");
  let inPeso = document.getElementById("inPeso");
  let nome = inNome.value;
  let peso = Number(inPeso.value);

  //Validação
  if (nome == "" || peso == 0 || isNaN(peso)) {
    alert("Informe nome e peso da aposta");
    inNome.focus();
    return;
  }

  // Chamada de função
  if (verApostaExiste(peso)) {
    alert("Alguém já apostou este peso, informe outro...");
    inPeso.focus();
    return;
  }

  // Checa e salva os dados salvos no navegador
  if (localStorage.getItem("melanciaNome")) {
    let melanciaNome = `${localStorage.getItem("melanciaNome")};${nome}`;
    let melanciaPeso = `${localStorage.getItem("melanciaPeso")};${peso}`;
    localStorage.setItem("melanciaNome", melanciaNome);
    localStorage.setItem("melanciaPeso", melanciaPeso);
  } else {
    // Caso seja a primeira aposta
    localStorage.setItem("melanciaNome", nome);
    localStorage.setItem("melanciaPeso", peso);
  }
  mostrarApostas();

  // Limpa os campos do formulário
  inNome.value = "";
  inPeso.value = "";
  inNome.focus();
}
let btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", incluirAposta);

function verApostaExiste(peso) {
  let existe = false;

  if (localStorage.getItem("melanciaPeso")) {
    let pesos = localStorage.getItem("melanciaPeso").split(";");
    // Converte o peso passado na função pra string e verifica o index no vetor
    if (pesos.indexOf(peso.toString()) >= 0) {
      existe = true;
    }
  }
  return existe;
}

function mostrarApostas() {
  let outApostas = document.getElementById("outApostas");

  if (!localStorage.getItem("melanciaNome")) {
    outApostas.textContent = "";
    return;
  }

  let nomes = localStorage.getItem("melanciaNome").split(";");
  let pesos = localStorage.getItem("melanciaPeso").split(";");
  let linhas = "";
  for (let i = 0; i < nomes.length; i++) {
    linhas += `${nomes[i]} - ${pesos[i]}gr \n`;
  }
  outApostas.textContent = linhas;
}
mostrarApostas();

function verificarVencedor() {
  if (!localStorage.getItem("melanciaNome")) {
    alert("Não há apostas cadastradas");
    return;
  }
  let pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));
  if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
    return;
  }
  let nomes = localStorage.getItem("melanciaNome").split(";");
  let pesos = localStorage.getItem("melanciaPeso").split(";");

  let vencedorNome = nomes[0];
  let vencedorPeso = Number(pesos[0]);
  for (let i = 1; i < nomes.length; i++) {
    difVencedor = Math.abs(vencedorPeso - pesoCorreto);
    difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);
    if (difAposta < difVencedor) {
      vencedorNome = nomes[i];
      vencedorPeso = Number(pesos[i]);
    }
  }
  let mensagem = `Resultado - Peso Correto: ${pesoCorreto} gr`;
  mensagem += "\n----------------------------------------------";
  mensagem += `\nVencedor: ${vencedorNome}`;
  mensagem += `\nAposta: ${vencedorPeso} gr`;
  alert(mensagem);
}
let btVencedor = document.getElementById("btVencedor");
btVencedor.addEventListener("click", verificarVencedor);

function limparApostas() {
  if (confirm("Confirma exclusão de todas as apostas?")) {
    localStorage.removeItem("melanciaNome");
    localStorage.removeItem("melanciaPeso");
    mostrarApostas();
  }
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparApostas);
